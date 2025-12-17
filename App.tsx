import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './contexts/ThemeContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage'));
const SolutionsLibraryPage = lazy(() => import('./pages/SolutionsLibraryPage'));
const SolutionDetailPage = lazy(() => import('./pages/SolutionDetailPage'));
const ProblemTestPage = lazy(() => import('./pages/ProblemTestPage'));
const PatternResultPage = lazy(() => import('./pages/PatternResultPage'));
const ThinkingStyleTestPage = lazy(() => import('./pages/ThinkingStyleTestPage'));
const EmotionalPatternTestPage = lazy(() => import('./pages/EmotionalPatternTestPage'));
const BehaviorTestPage = lazy(() => import('./pages/BehaviorTestPage'));
const GenericTestResultPage = lazy(() => import('./pages/GenericTestResultPage'));

const App: React.FC = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <ThemeProvider>
      <HashRouter>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-conditions" element={<TermsConditionsPage />} />
              <Route path="/solutions" element={<SolutionsLibraryPage />} />
              <Route path="/solutions/:solutionId" element={<SolutionDetailPage />} />
              <Route path="/problem-test" element={<ProblemTestPage />} />
              <Route path="/problem-test/result/:patternId" element={<PatternResultPage />} />
              <Route path="/thinking-style-test" element={<ThinkingStyleTestPage />} />
              <Route path="/emotional-pattern-test" element={<EmotionalPatternTestPage />} />
              <Route path="/behavior-test" element={<BehaviorTestPage />} />
              <Route path="/test-result/:testType/:resultId" element={<GenericTestResultPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;