import React from 'react';
import { AlertTriangle, CheckCircle, AlertOctagon, RefreshCcw, ArrowRight } from 'lucide-react';
import { SymptomAnalysis, UrgencyLevel } from '../types';

interface AnalysisResultProps {
  analysis: SymptomAnalysis;
  onReset: () => void;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ analysis, onReset }) => {
  
  const getUrgencyConfig = (level: UrgencyLevel) => {
    switch (level) {
      case UrgencyLevel.HIGH:
        return {
          color: 'bg-red-50 border-red-200',
          textColor: 'text-red-800',
          icon: <AlertOctagon className="h-12 w-12 text-red-600" />,
          title: 'Potlako e Phahameng (High Urgency)'
        };
      case UrgencyLevel.MEDIUM:
        return {
          color: 'bg-yellow-50 border-yellow-200',
          textColor: 'text-yellow-800',
          icon: <AlertTriangle className="h-12 w-12 text-yellow-600" />,
          title: 'Ela Hloko (Attention Needed)'
        };
      case UrgencyLevel.LOW:
      default:
        return {
          color: 'bg-green-50 border-green-200',
          textColor: 'text-green-800',
          icon: <CheckCircle className="h-12 w-12 text-green-600" />,
          title: 'E Bonolo (Low Urgency)'
        };
    }
  };

  const config = getUrgencyConfig(analysis.urgency);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Urgency Card */}
      <div className={`p-6 rounded-2xl border ${config.color} shadow-sm flex items-center gap-5`}>
        <div className="shrink-0">
          {config.icon}
        </div>
        <div>
          <h2 className={`text-lg font-bold ${config.textColor}`}>
            {config.title}
          </h2>
          <p className={`text-sm opacity-90 ${config.textColor}`}>
            Based on provided symptoms
          </p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-100 pb-2">
          Tlhaloso (Analysis)
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          {analysis.summary}
        </p>
      </div>

      {/* Possible Causes & Recommendations Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
            Zisosa (Possible Causes)
          </h3>
          <ul className="space-y-3">
            {analysis.possibleCauses.map((cause, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0"></span>
                <span>{cause}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
            Keletso (Advice)
          </h3>
          <ul className="space-y-3">
            {analysis.recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-600">
                <ArrowRight className="h-5 w-5 text-blue-500 shrink-0" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm text-gray-500 italic">
        <strong>Hlokomela:</strong> {analysis.disclaimer}
      </div>

      {/* Action Buttons */}
      <button
        onClick={onReset}
        className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
      >
        <RefreshCcw className="h-5 w-5" />
        Hlahloba Hape (Check Again)
      </button>

    </div>
  );
};