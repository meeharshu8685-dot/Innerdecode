import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../services/quizData';
import Card from '../components/Card';

const SolutionsLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSolutions = useMemo(() => {
    return solutionsData.filter(solution =>
      solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">Real Solutions Library</h1>
        <p className="text-lg text-text-secondary dark:text-slate-400">
          Browse our collection of practical toolkits designed to help you find balance and clarity.
        </p>
      </div>
      <div className="mb-8">
        <input
          type="search"
          placeholder="Search for a solution (e.g., 'Anxiety', 'Focus')..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 text-lg bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-calm-blue focus:border-transparent"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {filteredSolutions.map(solution => (
          <Link to={`/solutions/${solution.id}`} key={solution.id}>
            <Card className="h-full flex flex-col">
              <h2 className="text-2xl font-semibold text-text-primary dark:text-slate-200 mb-3">{solution.name}</h2>
              <p className="text-text-secondary dark:text-slate-400 flex-grow">{solution.shortDescription}</p>
            </Card>
          </Link>
        ))}
      </div>
      {filteredSolutions.length === 0 && (
        <div className="text-center py-16">
            <p className="text-xl text-text-secondary dark:text-slate-400">No solutions found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
};

export default SolutionsLibraryPage;