import { GoogleGenAI } from "@google/genai";

const API_KEY = "AIzaSyBev4CQwuBsH3nJ9dYnKbTbWI0c0gQRPdA";

const ai=new GoogleGenAI({
    apiKey: API_KEY,
  httpOptions: { apiVersion: "v1" }
})
async function runChat(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    console.log("Gemini Response:", response.text);
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: " + error.message;
  }
}

export default runChat;