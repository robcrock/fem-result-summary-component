import React from "react";

export const Results = () => {
  return (
    <div className="align-center flex w-full flex-col justify-center gap-8 rounded-[32px] rounded-t-none bg-gradient-to-b from-gradient-light-slate-blue to-gradient-light-royal-blue p-8 lg:w-[368px] lg:rounded-t-[32px]">
      <h2 className="text-heading-m mx-auto w-[125px] text-neutral-pale-blue">
        Your Result
      </h2>
      <div className="align-center mx-auto flex h-52 w-52 flex-col justify-center gap-1 rounded-full bg-gradient-to-b from-gradient-violet-blue to-gradient-persian-blue">
        <p className="text-heading-xl leading-none text-neutral-white">76</p>
        <p className="text-[18px] text-neutral-light-lavender">of 100</p>
      </div>
      <div className="align-center mx-auto flex w-[260px] flex-col justify-center gap-3 ">
        <p className="text-heading-l mx-auto w-[125px] text-neutral-white">
          Great
        </p>
        <p className="text-[18px] font-normal text-neutral-light-lavender">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
};
