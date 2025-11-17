import React, { useState, useEffect } from 'react';
import { Answer, QuizQuestion } from '../types';

interface QuizProps {
  questions: { [id: string]: QuizQuestion };
  startQuestionId: string;
  onComplete: (answers: Answer[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, startQuestionId, onComplete }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(startQuestionId);
  const [answers, setAnswers] = useState<{ [questionId: string]: number[] }>({});
  const [questionHistory, setQuestionHistory] = useState<string[]>([]);

  useEffect(() => {
    // Reset state if the quiz questions change (e.g., new test started)
    setCurrentQuestionId(startQuestionId);
    setAnswers({});
    setQuestionHistory([]);
  }, [startQuestionId, questions]);

  const handleAnswer = (optionIndex: number) => {
    const currentQuestion = questions[currentQuestionId];
    const currentSelected = answers[currentQuestionId] || [];
    
    if (currentQuestion.multiple) {
      // Toggle selection for multiple choice questions
      const newAnswers = currentSelected.includes(optionIndex)
        ? currentSelected.filter(i => i !== optionIndex)
        : [...currentSelected, optionIndex];
      setAnswers(prev => ({
        ...prev,
        [currentQuestionId]: newAnswers,
      }));
    } else {
      // Replace selection for single choice questions
      setAnswers(prev => ({
        ...prev,
        [currentQuestionId]: [optionIndex],
      }));
    }
  };
  
  const handleBack = () => {
    if (questionHistory.length > 0) {
      const lastQuestionId = questionHistory[questionHistory.length - 1];
      setQuestionHistory(prev => prev.slice(0, -1));
      setCurrentQuestionId(lastQuestionId);
    }
  };

  const getNextQuestionId = (): string | undefined => {
    const currentQuestion = questions[currentQuestionId];
    const currentSelectedIndices = answers[currentQuestionId] || [];

    if (currentSelectedIndices.length === 0) {
      return undefined;
    }

    if (currentQuestion.multiple) {
      // For multiple choice, check if any selected option has a specific nextQuestion
      for (const optionIndex of currentSelectedIndices) {
        const selectedOption = currentQuestion.options[optionIndex];
        if (selectedOption.nextQuestion) {
          return selectedOption.nextQuestion; // Use the first one found
        }
      }
      return currentQuestion.defaultNextQuestion;
    } else {
      const selectedOptionIndex = currentSelectedIndices[0];
      const selectedOption = currentQuestion.options[selectedOptionIndex];
      return selectedOption.nextQuestion || currentQuestion.defaultNextQuestion;
    }
  };

  const handleNext = () => {
    const nextId = getNextQuestionId();
    if (nextId && questions[nextId]) {
      setQuestionHistory(prev => [...prev, currentQuestionId]);
      setCurrentQuestionId(nextId);
    }
  };

  const handleFinish = () => {
    // FIX: Add a type guard to ensure optionIndices is an array. This resolves an
    // error where TypeScript could not infer the type of `optionIndices` and
    // treated it as `unknown`, preventing the use of the `.map` method.
    const finalAnswers: Answer[] = Object.entries(answers).flatMap(([questionId, optionIndices]) => {
      if (Array.isArray(optionIndices)) {
        return optionIndices.map(optionIndex => ({
          questionId,
          optionIndex,
        }));
      }
      return [];
    });
    onComplete(finalAnswers);
  };

  const currentQuestion = questions[currentQuestionId];
  
  if (!currentQuestion) {
    return <div>Loading question...</div>;
  }
  
  const currentAnswers = answers[currentQuestionId] || [];
  const hasAnsweredCurrent = currentAnswers.length > 0;
  
  const nextQuestionId = getNextQuestionId();
  const isLastQuestion = hasAnsweredCurrent && !nextQuestionId;

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-sm text-text-secondary dark:text-slate-400">
          <span>Question {questionHistory.length + 1}</span>
        </div>
      </div>
      <div className="text-center">
        <div className="mb-8 min-h-[4.5rem] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-slate-200">{currentQuestion.text}</h2>
            {currentQuestion.multiple && (
                <p className="text-md text-text-secondary dark:text-slate-400 mt-2">(Select all that apply)</p>
            )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => {
             const isSelected = currentAnswers.includes(index);
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
