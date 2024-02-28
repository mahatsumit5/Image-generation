"use client";
import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const InputForm = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [form, setForm] = useState({
    prompt: "",
    number: 0,
    size: "1024*1024",
  });
  const [search, setSearch] = useState<Boolean>(false);

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSearch(true);
  };
  useEffect(() => {
    setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (form.prompt) {
        params.set("prompt", form.prompt);
      }
      if (form.number) {
        params.set("number", form.number + "");
      }

      replace(`${pathname}?${params.toString()}`);
    }, 300);
  }, [form, pathname, replace, searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search + "");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [search]);
  return (
    <div className="mt-2 flex flex-col gap-2">
      <span className="w-full flex gap-3 flex-col sm:flex-row">
        <input
          type="text"
          className="p-5 rounded-full bg-blue-950 w-full  sm:w-4/6 "
          placeholder="A vivid scene showcasing a group of anthropomorphic, bright red racing cars. They have expressive eyes on their windshields and big-toothed grins on their front bumpers. The cars are animated with personality, exhibiting determination and speed in a race setting. Wide angle view of the tarmac racetrack, audience in the stands, racing flags, pit crew, and full race regalia. Visuals are akin to popular animated movies with anthropomorphic vehicles. Keep the vibe energetic and engaging, with a few racing cars battling neck and neck, speed dust trailing from their tires, and a proud, excited audience cheering in the backdrop."
          name="prompt"
          onChange={onChange}
          required
        />
        <input
          type="number"
          className="p-5 rounded-full bg-blue-950 w-full sm:w-2/6 "
          placeholder="Number "
          name="number"
          min={1}
          onChange={onChange}
          required
        />
      </span>

      <button
        className="px-7 py-2 rounded-lg bg-gradient-to-l from-purple-950  via-pink-900 to-blue-950 font-bold w-full sm:w-[250px] disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={!form.number || !form.prompt}
      >
        Generate
      </button>
    </div>
  );
};

export default InputForm;
