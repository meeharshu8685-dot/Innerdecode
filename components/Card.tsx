import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-md dark:shadow-slate-900 transition-shadow hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;