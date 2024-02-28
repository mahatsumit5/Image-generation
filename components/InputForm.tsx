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
  const handleSubmit = async () => {
    setLoading(true);
    ("use server");
    const { status, message, data } = await generateImage({
      prompt: form.prompt,
    });
    setLoading(false);
    if (status) {
      setImage(data.url);
    } else {
      setError(message);
    }
    console.log(data);
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
    <div className="mt-2 flex flex-col gap-2">
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
        onClick={handleSubmit}
        disabled={!form.prompt}
      >
        Generate
      </button>
    </div>
  );
};

export default InputForm;
