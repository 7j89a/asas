import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: In a production environment, ensure process.env.API_KEY is properly configured.
// For this demo, we assume the environment variable is injected.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const getSkinAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "عذراً، خدمة المساعد الذكي غير متوفرة حالياً (مفتاح API مفقود).";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are an expert dermatologist consultant for "ELIXIR SKIN".
      
      PRODUCT KNOWLEDGE BASE:
      - **Origin:** German patented technology (Patent received in Germany), manufactured in Jordan according to international standards.
      - **Licensing:** Licensed by the Jordanian Food and Drug Administration (JFDA).
      - **Founder:** Created by an Eye & Cosmetic Surgeon who worked in Germany.
      - **Composition:** 100% Natural, contains 39 pure minerals including Silicon Dioxide, Aluminum Oxide, Iron Oxide, Calcium Oxide, Magnesium Oxide, Zinc Oxide, Titanium Dioxide. Uses "Mineral Fusion Complex™" technology.
      - **Clinical Trials:** Tested on over 6000 cases globally with proven results.
      - **Benefits:** Treats acne, blackheads, pigmentation (melasma, sunburn), tightens skin, reduces dark circles, suitable for sensitive areas, deeply hydrates.
      - **Usage Routine:** 
        1. Cleanse skin.
        2. Apply mask evenly.
        3. Wait 30 mins until fully dry.
        4. Rub/Massage gently to remove surface layer.
        5. Leave the residue for another 15 mins.
        6. Rinse with warm water and moisturize.
      
      Your tone is sophisticated, professional, comforting, and premium.
      Answer questions about acne, skin types, and how the mask helps based strictly on the info above.
      Keep answers concise (under 3 sentences) and always encourage consistency.
      Answer in Arabic.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "حدث خطأ غير متوقع، يرجى المحاولة لاحقاً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "واجهنا مشكلة في الاتصال بالخبير الذكي. يرجى التحقق من اتصالك بالإنترنت.";
  }
};