"use server";
import { OpenAI } from "openai";
import * as dotenv from "dotenv";
export type params = {
  prompt: string;
};
export const generateImage = async (form: params) => {
  console.log(process.env.OPENAI_API_KEY);
  try {
    if (!form.prompt) {
      throw new Error("prompt  is required");
    }
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const { data } = await openai.images.generate({
      model: "dall-e-3",
      prompt: form.prompt,
      n: 1, // The number of images to generate
      quality: "hd",
      style: "natural",

      size: "1024x1024",
    });
    console.log(data);
    return JSON.parse(
      JSON.stringify({ status: true, message: "success", data: data[0] })
    );
  } catch (error: any) {
    console.log(error.message);
    return JSON.parse(
      JSON.stringify({ status: false, message: error.message })
    );
  }
};
