import React from 'react';
import { AnalysisResult } from '../components/AnalysisResult';
import { SymptomAnalysis } from '../types';

interface ResultsViewProps {
  analysis: SymptomAnalysis;
  onReset: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ analysis, onReset }) => {
  return <AnalysisResult analysis={analysis} onReset={onReset} />;
};