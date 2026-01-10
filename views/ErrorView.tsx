import React from 'react';
import { Stethoscope } from 'lucide-react';

interface ErrorViewProps {
  error: string;
  onRetry: () => void;
}

export const ErrorView: React.FC<ErrorViewProps> = ({ error, onRetry }) => {
  return (
    <div className="text-center py-12 animate-in fade-in">
      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Stethoscope className="h-8 w-8 text-red-600" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Error Processing Request</h3>
      <p className="text-red-600 mb-6">{error}</p>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Leka Hape (Try Again)
      </button>
    </div>
  );
};