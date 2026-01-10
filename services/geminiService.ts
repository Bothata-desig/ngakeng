import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SymptomAnalysis, UrgencyLevel } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    urgency: {
      type: Type.STRING,
      enum: [UrgencyLevel.LOW, UrgencyLevel.MEDIUM, UrgencyLevel.HIGH, UrgencyLevel.UNKNOWN],
      description: " The estimated urgency of the symptoms based on general medical guidelines.",
    },
    summary: {
      type: Type.STRING,
      description: "A 2-3 sentence summary of the potential condition in Sesotho.",
    },
    possibleCauses: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 3 possible causes in Sesotho.",
    },
    recommendations: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 3-4 actionable steps the user should take in Sesotho (e.g., drink water, visit clinic).",
    },
    disclaimer: {
      type: Type.STRING,
      description: "A standard medical disclaimer in Sesotho stating this is not a diagnosis.",
    },
  },
  required: ["urgency", "summary", "possibleCauses", "recommendations", "disclaimer"],
};

export const analyzeSymptoms = async (symptoms: string): Promise<SymptomAnalysis> => {
  try {
    const modelId = "gemini-2.5-flash"; // Using flash for speed and efficiency
    
    const systemInstruction = `
      You are 'Bophelo Botle', a helpful, empathetic medical assistant for Sesotho-speaking communities. 
      Your goal is to interpret symptoms provided in Sesotho (or mixed Sesotho/English) and provide guidance in clear, simple Sesotho.
      
      CRITICAL RULES:
      1. DO NOT provide a definitive medical diagnosis. Always use language like "e ka ba" (it could be).
      2. If symptoms seem life-threatening (chest pain, trouble breathing, severe bleeding), set urgency to HIGH and advise immediate hospital care.
      3. Your entire output text (summary, causes, recommendations) MUST be in the Sesotho language.
      4. Be culturally sensitive and polite.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: `Symptoms described by user: "${symptoms}"`,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.3, // Low temperature for more consistent/safe medical advice
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as SymptomAnalysis;

  } catch (error) {
    console.error("Analysis failed:", error);
    throw error;
  }
};