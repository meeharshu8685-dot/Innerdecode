
import { Answer, QuizQuestion } from '../types';

export const calculateResult = (answers: Answer[], questions: QuizQuestion[]): string => {
  const scores: { [key: string]: number } = {};

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options[answer.optionIndex];
      if (option && option.scores) {
        Object.entries(option.scores).forEach(([patternId, score]) => {
          scores[patternId] = (scores[patternId] || 0) + score;
        });
      }
    }
  });

  if (Object.keys(scores).length === 0) {
    // Default fallback if no scores are calculated
    return 'stress-overload'; 
  }

  // Find the pattern with the highest score
  const result = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b));

  return result[0];
};
