import Image from "next/image";
import memory from "../public/assets/images/icon-memory.svg";
import reaction from "../public/assets/images/icon-reaction.svg";
import verbal from "../public/assets/images/icon-verbal.svg";
import visual from "../public/assets/images/icon-visual.svg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] min-w-[100dvw] flex-col items-center justify-center">
      <div>
        <div className="flex h-[512px] w-[736px] rounded-[32px] bg-neutral-white text-center">
          <div className="align-center flex w-[368px] flex-col justify-center gap-8 rounded-[32px] bg-gradient-to-b from-gradient-light-slate-blue to-gradient-light-royal-blue">
            <h2 className="text-heading-m mx-auto w-[125px] text-neutral-pale-blue">
              Your Result
            </h2>
            <div className="align-center mx-auto flex h-52 w-52 flex-col justify-center gap-1 rounded-full bg-gradient-to-b from-gradient-violet-blue to-gradient-persian-blue">
              <p className="text-heading-xl leading-none text-neutral-white">
                76
              </p>
              <p className="text-[18px] text-neutral-light-lavender">of 100</p>
            </div>
            <div className="align-center mx-auto flex w-[260px] flex-col justify-center gap-3 ">
              <p className="text-heading-l mx-auto w-[125px] text-neutral-white">
                Great
              </p>
              <p className="text-[18px] font-normal text-neutral-light-lavender">
                Your performance exceed 65% of the people conducting the test
                here!
              </p>
            </div>
          </div>
          <div className="align-start flex h-full w-[368px] flex-col justify-center gap-8 p-8">
            <h2 className="text-heading-m text-start leading-none">Summary</h2>
            <ul className="flex flex-col gap-2">
              <li className="flex justify-between rounded-[12px] bg-primary-light-red/10 p-4 text-primary-light-red">
                <div className="flex gap-2">
                  <Image src={reaction} alt={"Reaction Icon"} />
                  <p>Reaction</p>
                </div>
                <p>
                  80<span>/100</span>
                </p>
              </li>
              <li className="flex justify-between rounded-[12px] bg-primary-orangey-yellow/10 p-4 text-primary-orangey-yellow">
                <div className="flex gap-2">
                  <Image src={memory} alt={"Memory Icon"} />
                  <p>Memory</p>
                </div>
                <p>
                  80<span>/100</span>
                </p>
              </li>
              <li className="flex justify-between rounded-[12px] bg-primary-green-teal/10 p-4 text-primary-green-teal">
                <div className="flex gap-2">
                  <Image src={verbal} alt={"Verbal Icon"} />
                  <p>Verbal</p>
                </div>
                <p>
                  80<span>/100</span>
                </p>
              </li>
              <li className="flex justify-between rounded-[12px] bg-primary-cobalt-blue/10 p-4 text-primary-cobalt-blue">
                <div className="flex gap-2">
                  <Image src={visual} alt={"Visual Icon"} />
                  <p>Visual</p>
                </div>
                <p>
                  80<span>/100</span>
                </p>
              </li>
            </ul>
            <button className="font-xl text-body h-14 w-full rounded-[32px] bg-neutral-dark-gray-blue p-4 text-neutral-white">
              Continue
            </button>
          </div>
        </div>
        <div className="mt-2 w-full bg-transparent text-center text-sm text-neutral-dark-gray-blue/50">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/robcrock">
            Robert Crocker
          </a>
          .
        </div>
      </div>
    </main>
  );
}
