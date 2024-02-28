"use server";
import { OpenAI } from "openai";
import * as dotenv from "dotenv";
export type params = {
  prompt: string;
  number: number;
};
export const generateImage = async (form: params) => {
  try {
    if (!form.number || !form.prompt) {
      throw new Error("prompt and number is required");
    }
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const { data } = await openai.images.generate({
      model: "dall-e-3",
      prompt: form.prompt,
      n: Number(form.number), // The number of images to generate
      quality: "hd",
      style: "natural",
      response_format: "url",
      size: "1024x1024",
    });
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
