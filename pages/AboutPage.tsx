import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold text-slate-800 dark:text-gray-200 mb-6 text-center">About Innerdecode</h1>
      <div className="space-y-8 text-lg text-text-secondary dark:text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold text-text-primary dark:text-gray-200 mb-3">Our Purpose</h2>
          <p>
            We live in a world filled with noise, pressure, and constant information. It's easy to feel overwhelmed, confused, or stuck. Innerdecode was created to be a quiet, clear space for you to understand what's happening inside your own mind and emotions. Our goal is to provide immediate clarity and practical solutions, helping you navigate life's challenges with more confidence and calm.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-text-primary dark:text-gray-200 mb-3">The Non-AI Principle</h2>
          <p>
            In an age of artificial intelligence, we've made a conscious choice to be different. This website uses a pre-defined, logic-based system. There are no chatbots interpreting your feelings or algorithms guessing what you need. Why? Because we believe in the power of structured, human-centric wisdom. Every pattern, explanation, and solution on this site is based on established psychological principles, simplified into accessible, everyday language. Your answers guide you through a map we've already drawn, leading to clear, consistent, and trustworthy insights.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-text-primary dark:text-gray-200 mb-3">The Science of Patterns</h2>
          <p>
            While we avoid clinical language, our system is rooted in the understanding that humans operate on patterns. Our thoughts, feelings, and behaviors often fall into predictable cycles, especially under stress. By identifying your current pattern—whether it's an "Overthinking Loop" or "Motivation Drop"—you can step outside of it. The first step to solving a problem is seeing it clearly. This site helps you do just that, empowering you to make conscious choices instead of running on autopilot.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-text-primary dark:text-gray-200 mb-3">Your Journey to Self-Understanding</h2>
          <p>
            This is more than just a problem-solving tool; it's a guide to self-awareness. By using our tests, you'll learn about your unique thinking style, your default emotional responses, and your natural behavioral tendencies. Understanding these parts of yourself is the foundation for lasting emotional balance and personal growth. We're here to provide the map—you are the one walking the path.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
