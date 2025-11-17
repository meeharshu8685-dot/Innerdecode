
export interface Answer {
  questionId: string;
  optionIndex: number;
}

export interface QuizOption {
  text: string;
  scores: { [key: string]: number };
  nextQuestion?: string; // ID of the next question if this option is chosen
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  defaultNextQuestion?: string; // Default next question ID if no option specifies one
  multiple?: boolean;
}

export interface Pattern {
  id: string;
  name: string;
  description: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
  immediateReset: {
    title: string;
    steps: string[];
  };
  rootCauseMapper: {
    title: string;
    questions: {
      question: string;
      options: string[];
    }[];
  };
  actionPaths: {
    title: string;
    paths: {
      name: string;
      icon: 'Mind' | 'Emotion' | 'Behavior' | 'Environment';
      description: string;
      tools: string[];
    }[];
  };
}

export type TestType = 'thinking' | 'emotional' | 'behavior';

export interface GenericTestResult {
  id: string;
  name: string;
  description: string;
  strengths: string[];
  challenges: string[]; // Or 'blindSpots' or 'weaknesses'
  tips: string[]; // Or 'howToImprove' or 'shiftingTechniques'
}

export interface Solution {
    id: string;
    name: string;
    shortDescription: string;
    sections: {
        title: string;
        content: string[];
    }[];
}