
import React, { useState } from 'react';
import { ViewState } from './types';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LANDING);

  const navigateToDashboard = () => {
    setCurrentView(ViewState.DASHBOARD);
  };

  const navigateToLanding = () => {
    setCurrentView(ViewState.LANDING);
  };

  return (
    <div className="min-h-screen transition-opacity duration-500">
      {currentView === ViewState.LANDING ? (
        <LandingPage onEnter={navigateToDashboard} />
      ) : (
        <Dashboard onBack={navigateToLanding} />
      )}
    </div>
  );
};

export default App;
