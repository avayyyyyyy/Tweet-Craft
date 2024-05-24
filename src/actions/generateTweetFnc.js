"use server";
import Replicate from "replicate";
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

export const GenerateTweetFnc = async (topic, mood) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You write viral tweets, your write tweets that the twitter algorithm needs and every tweet goes virals, you use very less hashtags or sometimes don't even use hashtags. Most of the tweets you write are shitpost, it means they are not always factually correct but it doesn't matter as long as it goes viral",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  console.log(topic, mood);

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  try {
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "Can you write a tweet on Mern Stack and make it casual under 75 words",
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Just finished building a to-do list app with MERN stack.  Now I can procrastinate in style. 😎  Anyone else out there a MERN master? Let's connect! \n",
            },
          ],
        },
      ],
    });

    const promptToGenAI = `Can you write a tweet on ${topic} and make it ${mood}`;

    const result = await chatSession.sendMessage(promptToGenAI);

    console.log(result.response.text());

    return { success: true, output: result.response.text() };
  } catch (err) {
    console.error("AI tweet generation failed:", err);
    return { success: false, output: err.toString() };
  }
};
