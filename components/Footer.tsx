import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-text-secondary dark:text-gray-400">
          <p className="mb-4 text-sm">
            This website is an informational tool for self-understanding and is not a medical service. It does not provide diagnosis, therapy, or medical advice.
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Link to="/about" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link>
            <a href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Use</a>
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Innerdecode. All rights reserved.</p>
          <p className="text-xs mt-2">Made by Harshu with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
