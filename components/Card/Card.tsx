import React from "react";
import { Results, Summary } from "./components";

export const Card = () => {
  return (
    <div className="flex flex-col rounded-[32px] bg-neutral-white text-center lg:flex lg:flex-row">
      <Results />
      <Summary />
    </div>
  );
};
