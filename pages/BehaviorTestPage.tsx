import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { behaviorTestQuestions } from '../services/quizData';
import { calculateResult } from '../services/quizService';
import { Answer, QuizQuestion } from '../types';

const BehaviorTestPage: React.FC = () => {
  const navigate = useNavigate();

  const handleComplete = (answers: Answer[]) => {
    const resultId = calculateResult(answers, behaviorTestQuestions);
    navigate(`/test-result/behavior/${resultId}`, { state: { answers } });
  };

  // FIX: Convert the array of questions to a map format expected by the Quiz component.
  const questionsMap = useMemo(() => {
    return behaviorTestQuestions.reduce((acc, question, index) => {
      const nextQuestion = behaviorTestQuestions[index + 1];
      acc[question.id] = {
        ...question,
        ...(nextQuestion && { defaultNextQuestion: nextQuestion.id }),
      };
      return acc;
    }, {} as { [id: string]: QuizQuestion });
  }, []);

  return (
    <div>
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">Behavior & Nature Test</h1>
            <p className="max-w-2xl mx-auto text-lg text-text-secondary dark:text-slate-400">How do you naturally approach tasks, challenges, and life in general? This test reveals your inherent style of action and interaction with the world.</p>
        </div>
        {/* FIX: Pass the converted questions map and the required startQuestionId prop. */}
        <Quiz
          questions={questionsMap}
          startQuestionId={behaviorTestQuestions[0]?.id}
          onComplete={handleComplete}
        />
    </div>
  );
};

export default BehaviorTestPage;