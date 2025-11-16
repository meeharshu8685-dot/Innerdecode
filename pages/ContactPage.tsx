import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        setSubmitted(true);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">Get in Touch</h1>
            {submitted ? (
                <div className="text-center p-8 bg-calm-green/30 rounded-lg">
                    <h2 className="text-2xl font-semibold text-green-800">Thank you!</h2>
                    <p className="text-green-700 mt-2">Your message has been sent. We appreciate your feedback.</p>
                </div>
            ) : (
                <>
                    <p className="text-center text-text-secondary dark:text-slate-400 mb-8">
                        Have a suggestion, feedback, or want to collaborate? We'd love to hear from you.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-primary dark:text-slate-300">Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 dark:text-white focus:outline-none focus:ring-calm-blue focus:border-calm-blue sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-primary dark:text-slate-300">Email</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 dark:text-white focus:outline-none focus:ring-calm-blue focus:border-calm-blue sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-text-primary dark:text-slate-300">Message</label>
                            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 dark:text-white focus:outline-none focus:ring-calm-blue focus:border-calm-blue sm:text-sm"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-calm-blue to-blue-500 hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                                Send Message
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default ContactPage;