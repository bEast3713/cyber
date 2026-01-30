
import { GoogleGenAI } from "@google/genai";

export const generateBirthdayWish = async (name: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, poetic birthday wish for ${name}. 
                 Combine metaphors of peaceful nature (zen, calm, waves, gardens) 
                 with tech/hacking metaphors (binary code, encryption, elegant logic, systems). 
                 Keep it under 60 words. Make it sound sophisticated yet warm.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Wish Error:", error);
    return "Happy Birthday, Tarnija! May your year be as bug-free as a zen garden and as beautiful as perfect code.";
  }
};
