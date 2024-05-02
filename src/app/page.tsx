"use client"

import Image from "next/image";
import BoxStep1 from "./components/BoxStep1";
import Slider from "./components/Slider";
import Step1 from "./components/Step1";
import Step3 from "./components/Step3";
import Step2 from "./components/Step2";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [stepIndex, setStepIndex] = useState<number>(1);
  const [sliderLabel, setSliderLabel] = useState<string>("");
  const [sliderClass, setSliderClass] = useState<string>("");

  function handlePrev(){
    let moveStep = stepIndex-1;
    if(moveStep<1) moveStep = 1;
    setStepIndex(moveStep);
  }
  function handleNext(){
    let moveStep = stepIndex+1;
    if(moveStep>3) moveStep = 3;
    setStepIndex(moveStep);
  }
  useEffect(()=>{
    switch(stepIndex){
      default:
      case 1:
        setSliderLabel("10% geschafft");
        setSliderClass("w-[10%]");
        break;
      case 2:
        setSliderLabel("50% geschafft");
        setSliderClass("w-[50%]");
        break;
      case 3:
        setSliderLabel("95% - Fast geschafft!");
        setSliderClass("w-[95%]");
        break;
    }
  },[stepIndex]);
  return (
    <main className={clsx(stepIndex === 3 ? "" : "pl-3 pr-3 pt-12 md:pl-16 md:pr-16 md:pt-16")}>
      <div className={clsx(stepIndex === 3 ? "bg-[#000D19] text-white" : "")}>
        <div className={clsx("pl-3 pr-3",
          stepIndex === 3 && "pt-12 md:pl-16 md:pr-16 md:pt-16 pb-10 border-b-2"
        )}>
          <Slider label={sliderLabel} className={clsx("transition-all duration-150 ease-in-out", sliderClass)}/>
        </div>
      </div>
      
      
      <div id="step1" className={clsx(stepIndex === 1 ? "block" : "hidden")}>
        <Step1 onClick={handleNext}/>
      </div>
      <div id="step2" className={clsx(stepIndex === 2 ? "block" : "hidden")}>
        <Step2 onClick={handleNext}/>
      </div>
      <div id="step3" className={clsx(stepIndex === 3 ? "block" : "hidden")}>
        <Step3 />
      </div>

      <div 
        className={clsx("pt-4 pb-4 ml-8 text-lg text-gray-600", 
          stepIndex === 1 && "hidden",
          stepIndex === 3 && "absolute left-1/4"
        )} 
        onClick={handlePrev}>
          <span>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-3">
              <g clipPath="url(#clip0_1_337)">
              <path d="M4.66663 11.22H17.7324" stroke="#5F5F68" strokeWidth="1.3999" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.66663 11.22L10.2662 16.8196" stroke="#5F5F68" strokeWidth="1.3999" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.66663 11.2196L10.2662 5.62" stroke="#5F5F68" strokeWidth="1.3999" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1_337">
              <rect width="22.4" height="22.4" fill="white" transform="translate(0 0.0199966)"/>
              </clipPath>
              </defs>
              </svg>
          </span>
          Zurück
      </div>
    </main>
  );
}
