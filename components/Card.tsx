import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  // Check if className contains a background color class
  const hasCustomBg = className.includes('bg-');
  const defaultBg = hasCustomBg ? '' : 'bg-white/80 dark:bg-zinc-900/60';
  
  return (
    <div className={`${defaultBg} backdrop-blur-sm p-6 rounded-2xl shadow-md dark:shadow-black/50 transition-shadow hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
