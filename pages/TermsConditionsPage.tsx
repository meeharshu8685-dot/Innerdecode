import React, { useEffect } from 'react';

const TermsConditionsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark text-text-primary dark:text-text-light transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">Terms and Conditions</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <section>
                        <p className="text-lg text-text-secondary dark:text-gray-300">
                            Welcome to Innerdecode! These terms and conditions outline the rules and regulations for the use of Innerdecode's Website.
                        </p>
                        <p className="mt-4 text-text-secondary dark:text-gray-300">
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use Innerdecode if you do not agree to take all of the terms and conditions stated on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Disclaimer</h2>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded-r-lg">
                            <p className="text-text-secondary dark:text-gray-300 italic">
                                The content provided on Innerdecode, including quizzes, assessments, and solutions, is for informational and educational purposes only. It is NOT intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or mental health concern.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Cookies</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            We employ the use of cookies. By accessing Innerdecode, you agreed to use cookies in agreement with the Innerdecode's Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">License</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            Unless otherwise stated, Innerdecode and/or its licensors own the intellectual property rights for all material on Innerdecode. All intellectual property rights are reserved. You may access this from Innerdecode for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>
                        <p className="mt-2 text-text-secondary dark:text-gray-300">You must not:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2 text-text-secondary dark:text-gray-300">
                            <li>Republish material from Innerdecode</li>
                            <li>Sell, rent or sub-license material from Innerdecode</li>
                            <li>Reproduce, duplicate or copy material from Innerdecode</li>
                            <li>Redistribute content from Innerdecode</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">User Content</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            Our website may allow you to post, link, store, share and otherwise available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Hyperlinking to our Content</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations; Online directory distributors.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">iFrames</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Content Liability</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsConditionsPage;
