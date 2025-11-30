import React from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { problemTestQuestionsMap } from '../services/quizData';
import { calculateResult } from '../services/quizService';
import { Answer } from '../types';

const ProblemTestPage: React.FC = () => {
  const navigate = useNavigate();

  const handleComplete = (answers: Answer[]) => {
    // Convert the map of questions to an array for the calculation service
    const allQuestionsArray = Object.values(problemTestQuestionsMap);
    const resultPatternId = calculateResult(answers, allQuestionsArray);
    navigate(`/problem-test/result/${resultPatternId}`, { state: { answers } });
  };

  return (
    <div>
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-gray-200 mb-4">Core Problem Identifier</h1>
            <p className="max-w-2xl mx-auto text-lg text-text-secondary dark:text-gray-400">Answer a few simple questions to understand the pattern of the problem you're facing. This will help us guide you to the right solution.</p>
        </div>
        <p className="text-center mb-8 text-lg font-medium text-calm-blue dark:text-calm-blue-light">Stay calm while selecting option</p>
        <Quiz 
          questions={problemTestQuestionsMap} 
          startQuestionId="q1_area"
          onComplete={handleComplete} 
        />
    </div>
  );
};

export default ProblemTestPage;
