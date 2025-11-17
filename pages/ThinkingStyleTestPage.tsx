import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { thinkingStyleTestQuestions } from '../services/quizData';
import { calculateResult } from '../services/quizService';
import { Answer, QuizQuestion } from '../types';

const ThinkingStyleTestPage: React.FC = () => {
  const navigate = useNavigate();

  const handleComplete = (answers: Answer[]) => {
    const resultId = calculateResult(answers, thinkingStyleTestQuestions);
    navigate(`/test-result/thinking/${resultId}`, { state: { answers } });
  };

  // FIX: Convert the array of questions to a map format expected by the Quiz component,
  // and add defaultNextQuestion to create a linear flow.
  const questionsMap = useMemo(() => {
    return thinkingStyleTestQuestions.reduce((acc, question, index) => {
      const nextQuestion = thinkingStyleTestQuestions[index + 1];
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
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">Thinking Style Test</h1>
            <p className="max-w-2xl mx-auto text-lg text-text-secondary dark:text-slate-400">Discover your natural approach to processing information and making decisions. This insight can help you leverage your strengths and navigate your blind spots.</p>
        </div>
        {/* FIX: Pass the converted questions map and the required startQuestionId prop. */}
        <Quiz
          questions={questionsMap}
          startQuestionId={thinkingStyleTestQuestions[0]?.id}
          onComplete={handleComplete}
        />
    </div>
  );
};

export default ThinkingStyleTestPage;