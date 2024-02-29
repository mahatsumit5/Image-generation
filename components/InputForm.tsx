"use client";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { generateImage } from "@/util";
import OpenAI from "openai";
type props = {
  setImage: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
};
const InputForm = ({ setImage, setLoading, setError }: props) => {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  const [form, setForm] = useState({
    prompt: "",
    size: "1024*1024",
  });
  // const [search, setSearch] = useState<Boolean>(false);

  function onChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const apikey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    try {
      if (!form.prompt) {
        throw new Error("prompt  is required");
      }
      const openai = new OpenAI({
        apiKey: apikey,
        dangerouslyAllowBrowser: true,
      });

      const { data } = await openai.images.generate({
        model: "dall-e-3",
        prompt: form.prompt,
        n: 1, // The number of images to generate
        quality: "standard",
        style: "natural",

        size: "1024x1024",
      });
      console.log(data);
      setImage(data[0].url as string);
      setLoading(false);
    } catch (error: any) {
      if (error.message.includes("Billing hard limit has been reached")) {
        error.message = "Your free limit has been reached.";
      }
      setError(error.message);
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     const params = new URLSearchParams(searchParams);
  //     if (form.prompt) {
  //       params.set("prompt", form.prompt);
  //     }

  //     replace(`${pathname}?${params.toString()}`);
  //   }, 300);
  // }, [form, pathname, replace, searchParams]);

  // useEffect(() => {
  //   const params = new URLSearchParams(searchParams);
  //   if (search) {
  //     params.set("search", search + "");
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // }, [search]);
  return (
    <form className="mt-2 flex flex-col gap-2" onSubmit={handleSubmit}>
      <span className="w-full flex gap-3 flex-col sm:flex-row">
        <textarea
          className="p-2 rounded-md bg-blue-950 w-full   placeholder:text-gray-600 resize-none focus:outline-purple-500"
          placeholder="A vivid scene showcasing a group of anthropomorphic, bright red racing cars. "
          name="prompt"
          rows={4}
          onChange={onChange}
          required
        />
      </span>

      <button
        className="px-7 py-2 rounded-lg bg-gradient-to-l from-purple-950  via-pink-900 to-blue-950 font-bold w-full sm:w-[250px] disabled:cursor-not-allowed"
        type="submit"
        disabled={!form.prompt}
      >
        Generate
      </button>
    </form>
  );
};

export default InputForm;
