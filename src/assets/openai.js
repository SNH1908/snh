// src/api/openai.js
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: process.env.VUE_APP_DEEPSEEK_BASE_URL,
  apiKey: process.env.VUE_APP_DEEPSEEK_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getCompletion(Value) {
  const snhvalue = Value + '(You are now a customer service expert! for our website: Stylenhomes.com, you need to serve guests with concise and dear answers, and feedback quests" preferences. Use English to answer the question of our customers, the limitation of words should be less than 75 English Words)'
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: snhvalue }],
      model: "deepseek-chat",
      max_tokens: 150, // 控制生成长度
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching completion:", error);
    throw error;
  }
}