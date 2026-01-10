import React from 'react';
import { Stethoscope, Mic, Send } from 'lucide-react';

interface HomeViewProps {
  symptomText: string;
  onTextChange: (text: string) => void;
  onAnalyze: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ symptomText, onTextChange, onAnalyze }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
          
      <div className="text-center py-6">
        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Stethoscope className="h-8 w-8 text-emerald-700" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">U ikutloa joang?</h2>
        <p className="text-gray-500 text-lg">Tell us how you feel (Sesotho)</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
          Hlalosa matšoao a hau (Describe your symptoms):
        </label>
        <textarea
          id="symptoms"
          rows={5}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none text-lg text-gray-800 placeholder:text-gray-300"
          placeholder="Mohlala: Ke opeloa ke hlooho, 'me kea chesa... (e.g., I have a headache and fever...)"
          value={symptomText}
          onChange={(e) => onTextChange(e.target.value)}
        ></textarea>
        
        <div className="flex justify-between items-center mt-3">
           <button 
            type="button" 
            className="text-gray-400 hover:text-emerald-600 transition-colors flex items-center gap-1 text-sm"
            title="Voice input coming soon"
           >
             <Mic className="h-4 w-4" /> Voice Input (Coming Soon)
           </button>
           <span className="text-xs text-gray-400">
             {symptomText.length} characters
           </span>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={onAnalyze}
          disabled={!symptomText.trim()}
          className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
            symptomText.trim() 
            ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Send className="h-5 w-5" />
          Hlahloba (Check Symptoms)
        </button>
        
        <p className="text-center text-xs text-gray-500 px-4">
          Lintlha tsena ke tsa boitsebiso feela. Ha se keletso ea bongaka.
          (Information is for guidance only. Not medical advice.)
        </p>
      </div>

    </div>
  );
};