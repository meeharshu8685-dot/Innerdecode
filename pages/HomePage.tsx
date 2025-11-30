
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { TINY_LIFE_UPGRADES } from '../constants';

const HomePage: React.FC = () => {
  const [currentUpgrade, setCurrentUpgrade] = useState<string>('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * TINY_LIFE_UPGRADES.length);
    setCurrentUpgrade(TINY_LIFE_UPGRADES[randomIndex]);
  }, []); // Run once on mount to select a new upgrade per visit

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary dark:text-gray-200 mb-4">
          Understand Yourself. Solve Your Problem.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary dark:text-gray-400 mb-8">
          A simple, powerful, choice-based system that maps your problem and gives you real solutions—instantly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/problem-test" className="px-8 py-3 bg-gradient-to-r from-calm-blue to-calm-blue-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            Start the Problem Test
          </Link>
          <Link to="/thinking-style-test" className="px-8 py-3 bg-white dark:bg-zinc-800 text-calm-blue-dark dark:text-calm-blue font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all border border-calm-blue/30 dark:border-zinc-700">
            Discover How You Think
          </Link>
        </div>
      </section>

      {/* What This Site Does */}
      <section>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-gray-200">Your Path to Clarity</h2>
            <p className="max-w-2xl mx-auto mt-4 text-text-secondary dark:text-gray-400">
                This is a non-AI, structured, logical system to help you understand what's happening inside and what to do about it.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-light-blue dark:bg-zinc-900/60">
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-gray-200">Identify Your Problem</h3>
                <p className="text-text-secondary dark:text-gray-400">Pinpoint the specific type of challenge you're facing right now.</p>
            </Card>
            <Card className="bg-light-olive-green dark:bg-zinc-900/60">
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-gray-200">See Your Patterns</h3>
                <p className="text-text-secondary dark:text-gray-400">Understand how your thinking and emotional habits influence your stress.</p>
            </Card>
            <Card className="bg-light-cream dark:bg-zinc-900/60">
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-gray-200">Get Real Solutions</h3>
                <p className="text-text-secondary dark:text-gray-400">Receive clear, actionable steps you can take immediately to feel better.</p>
            </Card>
            <Card className="bg-light-violet dark:bg-zinc-900/60">
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-gray-200">Gain Self-Awareness</h3>
                <p className="text-text-secondary dark:text-gray-400">Learn about yourself through simple, insightful tests and reflections.</p>
            </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-gray-200">Simple, Fast, and Effective</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-calm-blue-light dark:bg-zinc-800 rounded-full text-calm-blue font-bold text-2xl mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-gray-200">Answer Simple Questions</h3>
                <p className="text-text-secondary dark:text-gray-400">No writing, no guessing. Just choose the options that feel right for you.</p>
            </div>
            <div>
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-calm-blue-light dark:bg-zinc-800 rounded-full text-calm-blue font-bold text-2xl mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-gray-200">We Detect Your Pattern</h3>
                <p className="text-text-secondary dark:text-gray-400">Our logic-based system identifies the underlying mental and emotional pattern.</p>
            </div>
            <div>
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-calm-blue-light dark:bg-zinc-800 rounded-full text-calm-blue font-bold text-2xl mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-gray-200">Get Instant Solutions</h3>
                <p className="text-text-secondary dark:text-gray-400">Receive practical, calming solutions you can apply immediately to find relief.</p>
            </div>
        </div>
      </section>
      
      {/* Tiny Life Upgrades Section */}
      <section className="text-center bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-gray-200 mb-4">
          Tiny Life Upgrades: Your 60-Second Boost
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-text-secondary dark:text-gray-400 mb-8">
          Every visit gives you one simple improvement you can do in 60 seconds to enhance your day.
        </p>
        <Card className="max-w-xl mx-auto p-6 flex flex-col items-center justify-center min-h-[120px]">
          <p className="text-xl md:text-2xl font-semibold text-calm-blue dark:text-calm-blue-light text-center">
            {currentUpgrade || "Loading a tiny upgrade..."}
          </p>
        </Card>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-gray-200">Ready to Find Your Clarity?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-secondary dark:text-gray-400 mb-8">
            Everyone feels lost sometimes. You don't need to know everything—you only need the right clarity. Start now.
          </p>
          <Link to="/problem-test" className="px-10 py-4 bg-gradient-to-r from-calm-blue to-calm-blue-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg">
            Start Understanding Yourself
          </Link>
      </section>
    </div>
  );
};

export default HomePage;
