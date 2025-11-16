import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none"
      >
        <div className="flex items-center space-x-3">
          {icon && <span className="text-calm-blue">{icon}</span>}
          <span className="font-semibold text-lg text-text-primary dark:text-slate-200">{title}</span>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform text-text-secondary dark:text-slate-400 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-slate-800">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;