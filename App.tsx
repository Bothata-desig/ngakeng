import React from 'react';
import { Layout } from './components/Layout';
import { useSymptomController } from './controllers/useSymptomController';
import { HomeView } from './views/HomeView';
import { LoadingView } from './views/LoadingView';
import { ResultsView } from './views/ResultsView';
import { ErrorView } from './views/ErrorView';
import { AppView } from './types';

const App: React.FC = () => {
  const { state, actions } = useSymptomController();

  return (
    <Layout onReset={actions.reset}>
      
      {state.view === AppView.HOME && (
        <HomeView 
          symptomText={state.symptomText}
          onTextChange={actions.updateText}
          onAnalyze={actions.analyze}
        />
      )}

      {state.view === AppView.ANALYZING && (
        <LoadingView />
      )}

      {state.view === AppView.RESULTS && state.analysis && (
        <ResultsView 
          analysis={state.analysis}
          onReset={actions.reset}
        />
      )}

      {state.view === AppView.ERROR && state.error && (
        <ErrorView 
          error={state.error}
          onRetry={actions.retry}
        />
      )}
      
    </Layout>
  );
};

export default App;