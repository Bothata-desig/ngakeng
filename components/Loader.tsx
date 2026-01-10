import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <Loader2 className="h-16 w-16 text-emerald-600 animate-spin relative z-10" />
      </div>
      <h2 className="mt-6 text-xl font-semibold text-gray-800">Re ntse re hlahloba...</h2>
      <p className="text-gray-500">Analyzing symptoms...</p>
    </div>
  );
};