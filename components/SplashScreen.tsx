import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation shortly after mount
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    // Complete splash screen after animation duration
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800); // 2.8 seconds total duration

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-1000">
      <div className="relative flex flex-col items-center">
        {/* Animated Circle Background */}
        <div
          className={`absolute w-32 h-32 rounded-full blur-3xl opacity-20 bg-calm-blue-dark transition-all duration-1000 ease-out ${
            animate ? 'scale-150 opacity-40' : 'scale-50 opacity-0'
          }`}
        />
        
        {/* Main Logo Text Animation */}
        <div className="relative overflow-hidden z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary dark:text-white flex items-center">
             <span
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Inner
            </span>
            <span
              className={`ml-1 text-calm-blue-dark transform transition-all duration-1000 delay-500 ease-out ${
                animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              decode
            </span>
          </h1>
        </div>

        {/* Subtext with fade in */}
        <div className="mt-4 overflow-hidden">
          <p
            className={`text-sm md:text-base text-text-secondary dark:text-gray-400 font-medium tracking-wide transition-all duration-1000 delay-700 ease-out ${
              animate ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            Unlock Your True Potential
          </p>
        </div>

        {/* Progress Line */}
        <div className="mt-8 w-24 h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
                className={`h-full bg-calm-blue-dark rounded-full transition-all duration-1500 delay-700 ease-in-out ${
                    animate ? 'w-full' : 'w-0'
                }`}
            />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
