import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-zinc-800 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-slate-50 dark:bg-zinc-800/50 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
      >
        <div className="flex items-center space-x-3">
          {icon && <span className="text-calm-blue">{icon}</span>}
          <span className="font-semibold text-lg text-text-primary dark:text-gray-200 text-left">{title}</span>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform text-text-secondary dark:text-gray-400 accordion-toggle-icon ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`p-4 bg-white dark:bg-zinc-900 accordion-content ${!isOpen ? 'hidden' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
