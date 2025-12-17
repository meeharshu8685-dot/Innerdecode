import React, { useEffect } from 'react';

const PrivacyPolicyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark text-text-primary dark:text-text-light transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">Privacy Policy</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <section>
                        <p className="text-lg text-text-secondary dark:text-gray-300">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                        <p className="mt-4 text-text-secondary dark:text-gray-300">
                            At Innerdecode, accessible from innerdecode.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Innerdecode and how we use it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Consent</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Information We Collect</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                        </p>
                        <p className="mt-2 text-text-secondary dark:text-gray-300">
                            Innerdecode focuses on self-discovery through quizzes and assessments. We do not store personally identifiable data linked to your assessment results permanently on our servers in a way that can identify you without your explicit consent. Most processing happens locally or anonymously.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">How We Use Your Information</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            We use the information we collect in various ways, including to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2 text-text-secondary dark:text-gray-300">
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Log Files</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            Innerdecode follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Cookies and Web Beacons</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            Like any other website, Innerdecode uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Third Party Privacy Policies</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            Innerdecode's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-gray-100">Contact Us</h2>
                        <p className="text-text-secondary dark:text-gray-300">
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
