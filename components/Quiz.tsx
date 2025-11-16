import React, { useState, useEffect } from 'react';
import { Answer, QuizQuestion } from '../types';

interface QuizProps {
  questions: { [id: string]: QuizQuestion };
  startQuestionId: string;
  onComplete: (answers: Answer[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, startQuestionId, onComplete }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(startQuestionId);
  const [answers, setAnswers] = useState<{ [questionId: string]: number }>({});
  const [questionHistory, setQuestionHistory] = useState<string[]>([]);

  useEffect(() => {
    // Reset state if the quiz questions change (e.g., new test started)
    setCurrentQuestionId(startQuestionId);
    setAnswers({});
    setQuestionHistory([]);
  }, [startQuestionId, questions]);

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionId]: optionIndex
    }));
  };
  
  const handleBack = () => {
    if (questionHistory.length > 0) {
      const lastQuestionId = questionHistory[questionHistory.length - 1];
      setQuestionHistory(prev => prev.slice(0, -1));
      setCurrentQuestionId(lastQuestionId);
    }
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionId];
    const selectedOptionIndex = answers[currentQuestionId];
    if (selectedOptionIndex === undefined) return;
    
    const selectedOption = currentQuestion.options[selectedOptionIndex];
    const nextId = selectedOption.nextQuestion || currentQuestion.defaultNextQuestion;

    if (nextId && questions[nextId]) {
      setQuestionHistory(prev => [...prev, currentQuestionId]);
      setCurrentQuestionId(nextId);
    }
  };

  const handleFinish = () => {
    const finalAnswers: Answer[] = Object.entries(answers).map(([questionId, optionIndex]) => ({
        questionId,
        optionIndex
    }));
    onComplete(finalAnswers);
  };

  const currentQuestion = questions[currentQuestionId];
  const hasAnsweredCurrent = answers[currentQuestionId] !== undefined;

  const selectedOption = hasAnsweredCurrent ? currentQuestion.options[answers[currentQuestionId]] : null;
  const nextQuestionId = selectedOption?.nextQuestion || currentQuestion.defaultNextQuestion;
  const isLastQuestion = hasAnsweredCurrent && !nextQuestionId;

  if (!currentQuestion) {
    return <div>Loading question...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-sm text-text-secondary dark:text-slate-400">
          <span>Question {questionHistory.length + 1}</span>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-slate-200 mb-8">{currentQuestion.text}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => {
             const isSelected = answers[currentQuestionId] === index;
             return (
                <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-calm-blue focus:ring-offset-2 ${
                        isSelected 
                        ? 'border-calm-blue bg-calm-blue-light dark:bg-slate-700' 
                        : 'border-slate-200 dark:border-slate-600 hover:border-calm-blue hover:bg-calm-blue-light/50 dark:hover:bg-slate-700/50'
                    }`}
                >
                    <span className="text-lg font-medium text-text-primary dark:text-slate-200">{option.text}</span>
                </button>
             );
          })}
        </div>
      </div>
      
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handleBack}
          disabled={questionHistory.length === 0}
          className="px-6 py-2 text-slate-700 dark:text-slate-300 font-semibold rounded-full shadow-sm hover:shadow-md disabled:shadow-none bg-white dark:bg-slate-700 dark:hover:bg-slate-600 disabled:bg-slate-100 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 disabled:cursor-not-allowed transition-all border border-slate-200 dark:border-slate-600"
        >
          Back
        </button>
        
        {!isLastQuestion && (
          <button
            onClick={handleNext}
            disabled={!hasAnsweredCurrent}
            className="px-8 py-3 bg-gradient-to-r from-calm-blue to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:from-slate-300 disabled:to-slate-400 disabled:shadow-none disabled:transform-none disabled:cursor-not-allowed"
          >
            Next
          </button>
        )}

        {isLastQuestion && (
          <button
            onClick={handleFinish}
            disabled={!hasAnsweredCurrent}
            className="px-8 py-3 bg-gradient-to-r from-calm-green to-green-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:from-slate-300 disabled:to-slate-400 disabled:shadow-none disabled:transform-none disabled:cursor-not-allowed"
          >
            Finish Test
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;