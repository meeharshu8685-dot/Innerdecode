import React from 'react';
import { useParams, Navigate, Link, useLocation } from 'react-router-dom';
import { 
  thinkingStyleResults, 
  emotionalPatternResults, 
  behaviorResults,
  thinkingStyleTestQuestions,
  emotionalPatternTestQuestions,
  behaviorTestQuestions
} from '../services/quizData';
import { TestType, Answer, QuizQuestion } from '../types';
import Accordion from '../components/Accordion';

const testDataMap = {
  thinking: { data: thinkingStyleResults, title: "Thinking Style", questions: thinkingStyleTestQuestions },
  emotional: { data: emotionalPatternResults, title: "Emotional Pattern", questions: emotionalPatternTestQuestions },
  behavior: { data: behaviorResults, title: "Behavioral Nature", questions: behaviorTestQuestions },
};

const GenericTestResultPage: React.FC = () => {
  const { testType, resultId } = useParams<{ testType: TestType; resultId: string }>();
  const location = useLocation();
  const answers: Answer[] | undefined = location.state?.answers;

  if (!testType || !resultId || !testDataMap[testType]) {
    return <Navigate to="/" replace />;
  }

  const { data, title, questions } = testDataMap[testType];
  const result = data.find(r => r.id === resultId);

  if (!result) {
    return <Navigate to="/" replace />;
  }

  const getContributingAnswers = () => {
    if (!answers || !resultId) return {};

    const questionsMap = questions.reduce((acc, q) => {
        acc[q.id] = q;
        return acc;
    }, {} as { [id: string]: QuizQuestion });

    const contributing = answers.filter(answer => {
      const question = questionsMap[answer.questionId];
      if (question) {
        const option = question.options[answer.optionIndex];
        return option?.scores[resultId] > 0;
      }
      return false;
    });

    return contributing.reduce((acc, answer) => {
      const questionId = answer.questionId;
      if (!acc[questionId]) {
        acc[questionId] = {
          questionText: questionsMap[questionId].text,
          options: []
        };
      }
      const option = questionsMap[questionId].options[answer.optionIndex];
      const explanation = option.explanations?.[resultId] ?? '';
      acc[questionId].options.push({ text: option.text, explanation });
      return acc;
    }, {} as { [key: string]: { questionText: string; options: { text: string; explanation: string }[] } });
  };
  
  const contributingAnswersMap = getContributingAnswers();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center p-8 bg-gradient-to-br from-calm-blue-light to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-lg mb-12">
        <p className="text-lg text-text-secondary dark:text-slate-400 mb-2">Your Resulting {title}:</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">{result.name}</h1>
        <p className="text-lg text-text-secondary dark:text-slate-400 max-w-2xl mx-auto">{result.description}</p>
      </div>

      <div className="space-y-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary dark:text-slate-200 mb-4">Strengths</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-slate-300 text-lg">
                {result.strengths.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary dark:text-slate-200 mb-4">Challenges & Blind Spots</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-slate-300 text-lg">
                {result.challenges.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
        
        {answers && Object.keys(contributingAnswersMap).length > 0 && (
          <Accordion title="How We Found This Result">
            <div className="space-y-4 text-text-secondary dark:text-slate-300">
              <p>Your result is based on answers that point towards the <strong>{result.name}</strong> style. Here are the key choices you made:</p>
              {Object.values(contributingAnswersMap).map((item, index) => (
                <div key={index} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <p className="font-semibold text-text-primary dark:text-slate-200">When asked: "{item.questionText}"</p>
                  <ul className="mt-2 space-y-3">
                    {item.options.map((opt, i) => (
                      <li key={i} className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg">
                        <p className="text-text-primary dark:text-slate-300">You chose: <span className="font-semibold">"{opt.text}"</span></p>
                        {opt.explanation && (
                          <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-600">
                            <p className="text-sm text-sky-800 dark:text-sky-300">
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

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-text-primary dark:text-slate-200 mb-4">Tips for Balance & Growth</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary dark:text-slate-300 text-lg">
                {result.tips.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
      </div>
       <div className="text-center mt-12">
            <Link to="/" className="px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all border border-slate-200 dark:border-slate-600">
                &larr; Back to Home
            </Link>
        </div>
    </div>
  );
};

export default GenericTestResultPage;