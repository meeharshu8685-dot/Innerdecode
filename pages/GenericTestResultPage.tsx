import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { thinkingStyleResults, emotionalPatternResults, behaviorResults } from '../services/quizData';
import { TestType } from '../types';

const testDataMap = {
  thinking: { data: thinkingStyleResults, title: "Thinking Style" },
  emotional: { data: emotionalPatternResults, title: "Emotional Pattern" },
  behavior: { data: behaviorResults, title: "Behavioral Nature" },
};

const GenericTestResultPage: React.FC = () => {
  const { testType, resultId } = useParams<{ testType: TestType; resultId: string }>();

  if (!testType || !resultId || !testDataMap[testType]) {
    return <Navigate to="/" replace />;
  }

  const { data, title } = testDataMap[testType];
  const result = data.find(r => r.id === resultId);

  if (!result) {
    return <Navigate to="/" replace />;
  }

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