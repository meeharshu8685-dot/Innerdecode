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
      acc[questionId].options.push(problemTestQuestionsMap[questionId].options[answer.optionIndex].text);
      return acc;
    }, {} as { [key: string]: { questionText: string; options: string[] } });
  };
  
  const contributingAnswersMap = getContributingAnswers();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center p-8 bg-gradient-to-br from-calm-blue-light to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg mb-12">
        <p className="text-lg text-text-secondary dark:text-slate-400 mb-2">We've identified a pattern:</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">{pattern.name}</h1>
        <p className="text-lg text-text-secondary dark:text-slate-400 max-w-2xl mx-auto">{pattern.description}</p>
      </div>

      <div className="space-y-8">
        {/* Immediate Reset */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary dark:text-slate-200 mb-4">{pattern.immediateReset.title} (1-3 Minutes)</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-slate-300 text-lg">
                {pattern.immediateReset.steps.map((step, i) => <li key={i}>{step}</li>)}
            </ul>
        </div>
        
        {/* How we found this pattern */}
        {answers && Object.keys(contributingAnswersMap).length > 0 && (
          <Accordion title="How We Found This Pattern">
            <div className="space-y-4 text-text-secondary dark:text-slate-300">
              <p>Your result is based on answers that point towards the <strong>{pattern.name}</strong> pattern. Here are the key choices you made:</p>
              {Object.values(contributingAnswersMap).map((item, index) => (
                <div key={index} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <p className="font-semibold text-text-primary dark:text-slate-200">When asked: "{item.questionText}"</p>
                  <p className="mt-1">You selected:</p>
                  <ul className="list-disc list-inside ml-4">
                    {item.options.map((opt, i) => <li key={i}>{opt}</li>)}
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
                    <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-slate-300">
                        {section.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                ) : (
                    <p className="text-text-secondary dark:text-slate-300">{section.content}</p>
                )}
            </Accordion>
        ))}

        {/* Action Paths */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary dark:text-slate-200 mb-4">{pattern.actionPaths.title}</h2>
            <p className="text-text-secondary dark:text-slate-400 mb-6">Choose one path to explore deeper solutions tailored to your needs.</p>
            <div className="grid md:grid-cols-2 gap-6">
                {pattern.actionPaths.paths.map(path => (
                    <div key={path.name} className={`p-4 border-2 rounded-xl transition-all ${selectedPath === path.name ? 'border-calm-blue bg-calm-blue-light dark:bg-slate-700' : 'border-slate-200 dark:border-slate-600'}`}>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 text-calm-blue mt-1">
                                {ICONS[path.icon]}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-text-primary dark:text-slate-200">{path.name} Path</h3>
                                <p className="text-text-secondary dark:text-slate-400 mb-4">{path.description}</p>
                                {selectedPath === path.name ? (
                                    <div className="space-y-2">
                                      <h4 className="font-semibold text-text-primary dark:text-slate-200">Tools & Techniques:</h4>
                                       <ul className="list-disc list-inside text-text-secondary dark:text-slate-300">
                                            {path.tools.map((tool, i) => <li key={i}>{tool}</li>)}
                                        </ul>
                                    </div>
                                ) : (
                                    <button onClick={() => setSelectedPath(path.name)} className="text-sm font-semibold text-blue-600 hover:underline">
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