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

  return (
    <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4">{solution.name}</h1>
            <p className="text-xl text-text-secondary dark:text-slate-400">{solution.shortDescription}</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6">
            {solution.sections.map((section, index) => (
                <Accordion key={index} title={section.title}>
                    <div className="space-y-4 text-text-secondary dark:text-slate-300">
                        {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                </Accordion>
            ))}
        </div>
        
        <div className="text-center mt-12">
            <Link to="/solutions" className="px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all border border-slate-200 dark:border-slate-600">
                &larr; Back to Solutions Library
            </Link>
        </div>
    </div>
  );
};

export default SolutionDetailPage;