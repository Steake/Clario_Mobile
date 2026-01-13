
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAiTutorResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  if (!API_KEY) {
    return "API Key not configured. Please ensure your environment has the API_KEY set.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = "gemini-3-flash-preview";
  
  try {
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: "You are Clara, a friendly and highly knowledgeable AI tutor specializing in Computer Science, specifically Python and Blockchain. Your goal is to help students learn effectively through clear explanations and examples. Keep your tone encouraging and professional.",
      },
    });

    // Note: In a real app we'd map history correctly. For now, we use a simple call for simplicity.
    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong with our AI connection. Please try again later.";
  }
};
