import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { emotionalPatternTestQuestions } from '../services/quizData';
import { calculateResult } from '../services/quizService';
import { Answer, QuizQuestion } from '../types';

const EmotionalPatternTestPage: React.FC = () => {
  const navigate = useNavigate();

  const handleComplete = (answers: Answer[]) => {
    const resultId = calculateResult(answers, emotionalPatternTestQuestions);
    navigate(`/test-result/emotional/${resultId}`, { state: { answers } });
  };

  // FIX: Convert the array of questions to a map format expected by the Quiz component.
  const questionsMap = useMemo(() => {
    return emotionalPatternTestQuestions.reduce((acc, question, index) => {
      const nextQuestion = emotionalPatternTestQuestions[index + 1];
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
            <h1 className="text-4xl font-bold text-slate-800 dark:text-gray-200 mb-4">Emotional Pattern Test</h1>
            <p className="max-w-2xl mx-auto text-lg text-text-secondary dark:text-gray-400">Understand your default emotional responses. Knowing your pattern is the first step toward greater emotional regulation and resilience.</p>
        </div>
        {/* FIX: Pass the converted questions map and the required startQuestionId prop. */}
        <Quiz
          questions={questionsMap}
          startQuestionId={emotionalPatternTestQuestions[0]?.id}
          onComplete={handleComplete}
        />
    </div>
  );
};

export default EmotionalPatternTestPage;
