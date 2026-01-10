import React from 'react';
import { HeartPulse, Info } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onReset: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onReset }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-emerald-700 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={onReset}
          >
            <HeartPulse className="h-8 w-8 text-emerald-200" />
            <div>
              <h1 className="text-xl font-bold leading-none">Bophelo Botle</h1>
              <p className="text-xs text-emerald-100 opacity-80">Sesotho Symptom Checker</p>
            </div>
          </div>
          <button className="text-emerald-100 hover:text-white transition-colors">
            <Info className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-3xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-3xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Bophelo Botle Health Initiative.</p>
          <p className="mt-2 text-xs text-gray-400">
            Sesebelisoa sena hase ngaka. (This tool is not a doctor.)
          </p>
        </div>
      </footer>
    </div>
  );
};