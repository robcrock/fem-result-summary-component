import React from "react";
import Image from "next/image";
import { cn, generateCategoryStyle } from "@/lib/utils";
import CATEGORIES from "@/public/data";
import { Button } from "../../ui/button";

export const Summary = () => {
  return (
    <div className="align-start flex h-full w-full flex-col justify-center gap-8 p-8 lg:w-[368px]">
      <h2 className="text-heading-m text-start leading-none">Summary</h2>
      <ul className="flex flex-col gap-2">
        {CATEGORIES.map(
          (category: { category: string; icon: string; score: number }) => (
            <li
              key={category.category}
              className={cn(generateCategoryStyle(category.category), 'flex justify-between rounded-[12px] font-medium')}
            >
              <div className="flex gap-2">
                <Image
                  height={24}
                  width={24}
                  src={category.icon}
                  alt={`${category.category} Icon`}
                />
                <p>{category.category}</p>
              </div>
              <p className="text-neutral-dark-gray-blue">
                {`${category.score} `}
                <span className="text-neutral-dark-gray-blue/30">/ 100</span>
              </p>
            </li>
          ),
        )}
      </ul>
      <Button className="font-xl text-body h-14 w-full rounded-[32px] bg-neutral-dark-gray-blue p-4 text-[18px] font-bold text-neutral-white active:bg-neutral-dark-gray-blue
      hover:bg-gradient-to-b from-gradient-light-slate-blue to-gradient-light-royal-blue transition-all duration-200">
        Continue
      </Button>
    </div>
  );
};
