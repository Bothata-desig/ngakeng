import { useState } from 'react';
import { AppView, SymptomAnalysis } from '../types';
import { analyzeSymptoms } from '../services/geminiService';

export const useSymptomController = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [symptomText, setSymptomText] = useState('');
  const [analysis, setAnalysis] = useState<SymptomAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!symptomText.trim()) return;

    setView(AppView.ANALYZING);
    setError(null);

    try {
      const result = await analyzeSymptoms(symptomText);
      setAnalysis(result);
      setView(AppView.RESULTS);
    } catch (err) {
      console.error(err);
      setError("Ho bile le phoso. Ka kopo leka hape. (An error occurred. Please try again.)");
      setView(AppView.ERROR);
    }
  };

  const handleReset = () => {
    setSymptomText('');
    setAnalysis(null);
    setError(null);
    setView(AppView.HOME);
  };

  const handleTextChange = (text: string) => {
    setSymptomText(text);
  };

  const retry = () => {
    setError(null);
    setView(AppView.HOME);
  };

  return {
    state: {
      view,
      symptomText,
      analysis,
      error
    },
    actions: {
      analyze: handleAnalyze,
      reset: handleReset,
      updateText: handleTextChange,
      retry: retry
    }
  };
};