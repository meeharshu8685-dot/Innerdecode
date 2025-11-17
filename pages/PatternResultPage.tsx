import React, { useState } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { problemPatterns, problemTestQuestionsMap } from '../services/quizData';
import Accordion from '../components/Accordion';
import { ICONS } from '../constants';
import { Answer } from '../types';

const PatternResultPage: React.FC = () => {
  const { patternId } = useParams<{ patternId: string }>();
  const location = useLocation();
  const answers: Answer[] | undefined = location.state?.answers;
  const pattern = problemPatterns.find(p => p.id === patternId);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  if (!pattern) {
    return <Navigate to="/problem-test" replace />;
  }

  const getContributingAnswers = () => {
    if (!answers || !patternId) return {};

    const contributing = answers.filter(answer => {
      const question = problemTestQuestionsMap[answer.questionId];
      if (question) {
        const option = question.options[answer.optionIndex];
        return option?.scores[patternId] > 0;
      }
      return false;
    });

    // Group by question
    return contributing.reduce((acc, answer) => {
      const questionId = answer.questionId;
      if (!acc[questionId]) {
        acc[questionId] = {
          questionText: problemTestQuestionsMap[questionId].text,
          options: []
        };
      }
      const option = problemTestQuestionsMap[questionId].options[answer.optionIndex];
      const explanation = option.explanations?.[patternId] ?? '';
      acc[questionId].options.push({ text: option.text, explanation });
      return acc;
    }, {} as { [key: string]: { questionText: string; options: { text: string; explanation: string }[] } });
  };
  
  const contributingAnswersMap = getContributingAnswers();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center p-8 bg-gradient-to-br from-calm-blue-light to-white dark:from-zinc-900 dark:to-zinc-800 rounded-2xl shadow-lg mb-12">
        <p className="text-lg text-text-secondary dark:text-gray-400 mb-2">We've identified a pattern:</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-gray-200 mb-4">{pattern.name}</h1>
        <p className="text-lg text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">{pattern.description}</p>
      </div>

      <div className="space-y-8">
        {/* Immediate Reset */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary dark:text-gray-200 mb-4">{pattern.immediateReset.title} (1-3 Minutes)</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300 text-lg">
                {pattern.immediateReset.steps.map((step, i) => <li key={i}>{step}</li>)}
            </ul>
        </div>
        
        {/* How we found this pattern */}
        {answers && Object.keys(contributingAnswersMap).length > 0 && (
          <Accordion title="How We Found This Pattern">
            <div className="space-y-4 text-text-secondary dark:text-gray-300">
              <p>Your result is based on answers that point towards the <strong>{pattern.name}</strong> pattern. Here are the key choices you made:</p>
              {Object.values(contributingAnswersMap).map((item, index) => (
                <div key={index} className="p-3 bg-slate-50 dark:bg-zinc-800/50 rounded-lg">
                  <p className="font-semibold text-text-primary dark:text-gray-200">When asked: "{item.questionText}"</p>
                  <ul className="mt-2 space-y-3">
                    {item.options.map((opt, i) => (
                      <li key={i} className="p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-lg">
                        <p className="text-text-primary dark:text-gray-300">You chose: <span className="font-semibold">"{opt.text}"</span></p>
                        {opt.explanation && (
                          <div className="mt-2 pt-2 border-t border-slate-200 dark:border-zinc-700">
                            <p className="text-sm text-blue-800 dark:text-calm-blue">
                              <span className="font-semibold">Clarity:</span> {opt.explanation}
                            </p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Accordion>
        )}

        {/* Sections */}
        {pattern.sections.map((section, index) => (
            <Accordion key={index} title={section.title}>
                {Array.isArray(section.content) ? (
                    <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-gray-300">
                        {section.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                ) : (
                    <p className="text-text-secondary dark:text-gray-300">{section.content}</p>
                )}
            </Accordion>
        ))}

        {/* Action Paths */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary dark:text-gray-200 mb-4">{pattern.actionPaths.title}</h2>
            <p className="text-text-secondary dark:text-gray-400 mb-6">Choose one path to explore deeper solutions tailored to your needs.</p>
            <div className="grid md:grid-cols-2 gap-6">
                {pattern.actionPaths.paths.map(path => (
                    <div key={path.name} className={`p-4 border-2 rounded-xl transition-all ${selectedPath === path.name ? 'border-calm-blue bg-calm-blue-light dark:bg-zinc-800' : 'border-slate-200 dark:border-zinc-700'}`}>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 text-calm-blue mt-1">
                                {ICONS[path.icon]}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-text-primary dark:text-gray-200">{path.name} Path</h3>
                                <p className="text-text-secondary dark:text-gray-400 mb-4">{path.description}</p>
                                {selectedPath === path.name ? (
                                    <div className="space-y-2">
                                      <h4 className="font-semibold text-text-primary dark:text-gray-200">Tools & Techniques:</h4>
                                       <ul className="list-disc list-inside text-text-secondary dark:text-gray-300">
                                            {path.tools.map((tool, i) => <li key={i}>{tool}</li>)}
                                        </ul>
                                    </div>
                                ) : (
                                    <button onClick={() => setSelectedPath(path.name)} className="text-sm font-semibold text-calm-blue-dark hover:underline">
                                        Explore this path
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PatternResultPage;
