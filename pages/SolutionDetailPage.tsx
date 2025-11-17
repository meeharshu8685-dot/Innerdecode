import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { solutionsData } from '../services/quizData';
import Accordion from '../components/Accordion';

const SolutionDetailPage: React.FC = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const solution = solutionsData.find(s => s.id === solutionId);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-gray-200 mb-4">{solution.name}</h1>
            <p className="text-xl text-text-secondary dark:text-gray-400">{solution.shortDescription}</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-6 print-container">
            {solution.sections.map((section, index) => (
                <Accordion key={index} title={section.title}>
                    <div className="space-y-4 text-text-secondary dark:text-gray-300">
                        {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                </Accordion>
            ))}
        </div>
        
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 print-hide">
            <Link to="/solutions" className="px-6 py-3 bg-white dark:bg-zinc-800 text-calm-blue-dark dark:text-calm-blue font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all border border-calm-blue/30 dark:border-zinc-700">
                &larr; Back to Solutions Library
            </Link>
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-gradient-to-r from-calm-blue to-calm-blue-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Print Solution
            </button>
        </div>
    </div>
  );
};

export default SolutionDetailPage;
