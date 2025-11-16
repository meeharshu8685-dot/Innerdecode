import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          Understand Yourself. Solve Your Problem.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary dark:text-slate-400 mb-8">
          A simple, powerful, choice-based system that maps your problem and gives you real solutions—instantly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/problem-test" className="px-8 py-3 bg-gradient-to-r from-calm-blue to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            Start the Problem Test
          </Link>
          <Link to="/thinking-style-test" className="px-8 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all border border-slate-200 dark:border-slate-600">
            Discover How You Think
          </Link>
        </div>
      </section>

      {/* What This Site Does */}
      <section>
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">Your Path to Clarity</h2>
            <p className="max-w-2xl mx-auto mt-4 text-text-secondary dark:text-slate-400">
                This is a non-AI, structured, logical system to help you understand what's happening inside and what to do about it.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-slate-200">Identify Your Problem</h3>
                <p className="text-text-secondary dark:text-slate-400">Pinpoint the specific type of challenge you're facing right now.</p>
            </Card>
            <Card>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-slate-200">See Your Patterns</h3>
                <p className="text-text-secondary dark:text-slate-400">Understand how your thinking and emotional habits influence your stress.</p>
            </Card>
            <Card>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-slate-200">Get Real Solutions</h3>
                <p className="text-text-secondary dark:text-slate-400">Receive clear, actionable steps you can take immediately to feel better.</p>
            </Card>
            <Card>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-slate-200">Gain Self-Awareness</h3>
                <p className="text-text-secondary dark:text-slate-400">Learn about yourself through simple, insightful tests and reflections.</p>
            </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">Simple, Fast, and Effective</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-calm-blue-light dark:bg-slate-700 rounded-full text-calm-blue font-bold text-2xl mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-slate-200">Answer Simple Questions</h3>
                <p className="text-text-secondary dark:text-slate-400">No writing, no guessing. Just choose the options that feel right for you.</p>
            </div>
            <div>
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-calm-blue-light dark:bg-slate-700 rounded-full text-calm-blue font-bold text-2xl mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-slate-200">We Detect Your Pattern</h3>
                <p className="text-text-secondary dark:text-slate-400">Our logic-based system identifies the underlying mental and emotional pattern.</p>
            </div>
            <div>
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-calm-blue-light dark:bg-slate-700 rounded-full text-calm-blue font-bold text-2xl mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-slate-200">Get Instant Solutions</h3>
                <p className="text-text-secondary dark:text-slate-400">Receive practical, calming solutions you can apply immediately to find relief.</p>
            </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">Ready to Find Your Clarity?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-text-secondary dark:text-slate-400 mb-8">
            Everyone feels lost sometimes. You don't need to know everything—you only need the right clarity. Start now.
          </p>
          <Link to="/problem-test" className="px-10 py-4 bg-gradient-to-r from-calm-blue to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg">
            Start Understanding Yourself
          </Link>
      </section>
    </div>
  );
};

export default HomePage;