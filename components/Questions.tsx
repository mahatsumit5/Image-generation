import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { question } from "@/constants";

const Questions = () => {
  return (
    <section className="flex flex-col  w-full  gap-5 border-b border-b-purple-950 pb-3 mt-10">
      <span className="flex flex-col gap-8  items-center p-4 pb-7">
        <h1 className="uppercase bg-purple-600 p-3 font-bold">
          Frequently Asked
        </h1>
        <h1 className="uppercase text-3xl font-bold ">
          Do you have a question?
        </h1>
      </span>
      <div className="mt-5">
        <Accordion type="single" collapsible className="w-full">
          {question.map((item) => (
            <AccordionItem value={item.question} key={item.id}>
              <AccordionTrigger className="font-bold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
