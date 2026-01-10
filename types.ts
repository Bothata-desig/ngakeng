export enum UrgencyLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  UNKNOWN = 'UNKNOWN'
}

export interface SymptomAnalysis {
  urgency: UrgencyLevel;
  summary: string; // Brief explanation in Sesotho
  possibleCauses: string[]; // List of potential causes in Sesotho
  recommendations: string[]; // Actionable advice in Sesotho
  disclaimer: string; // Safety disclaimer in Sesotho
}

export enum AppView {
  HOME = 'HOME',
  ANALYZING = 'ANALYZING',
  RESULTS = 'RESULTS',
  ERROR = 'ERROR'
}