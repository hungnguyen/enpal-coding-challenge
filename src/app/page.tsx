'use client';

import Slider from './components/Slider';
import Step1 from './components/Step1';
import Step3 from './components/Step3';
import Step2 from './components/Step2';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { AppProvider } from './context/AppProvider';
import { initState } from './context/store';
import Back from './components/Back';

export default function Home() {
  const [stepIndex, setStepIndex] = useState<number>(1);
  const [sliderLabel, setSliderLabel] = useState<string>('');
  const [sliderClass, setSliderClass] = useState<string>('');
  const olsStep = useRef<number>(1);
  const [beforePrev, setBeforePrev] = useState<boolean>(false);
  const [beforeNext, setBeforeNext] = useState<boolean>(false);

  function handlePrev() {
    setBeforePrev(true);
  }
  function handleNext() {
    setBeforeNext(true);
  }
  useEffect(() => {
    if (beforeNext) {
      olsStep.current = stepIndex;
      let moveStep = stepIndex + 1;
      if (moveStep > 3) moveStep = 3;
      setStepIndex(moveStep);
      setBeforeNext(false);
    }
  }, [beforeNext]);
  useEffect(() => {
    if (beforePrev) {
      olsStep.current = stepIndex;
      let moveStep = stepIndex - 1;
      if (moveStep < 1) moveStep = 1;
      setStepIndex(moveStep);
      setBeforePrev(false);
    }
  }, [beforePrev]);
  useEffect(() => {
    switch (stepIndex) {
      default:
      case 1:
        setSliderLabel('10% geschafft');
        setSliderClass('w-[10%]');
        break;
      case 2:
        setSliderLabel('50% geschafft');
        setSliderClass('w-[50%]');
        break;
      case 3:
        setSliderLabel('95% - Fast geschafft!');
        setSliderClass('w-[95%]');
        break;
    }
  }, [stepIndex]);

  return (
    <AppProvider initialState={initState}>
      <main>
        <div className={clsx(stepIndex === 3 ? 'bg-[#000D19] text-white' : '')}>
          <div
            className={clsx({
              'pl-6 pr-6 pt-12 md:pl-20 md:pr-20 md:pt-16': true,
              'border-b-2 pb-10 pt-12  md:pt-16': stepIndex === 3,
            })}
          >
            <Slider
              label={sliderLabel}
              className={clsx(
                'transition-all duration-150 ease-in-out',
                sliderClass,
              )}
            />
          </div>
        </div>
        <div
          className={clsx({
            'relative w-full overflow-hidden': true,
            'h-screen': stepIndex < 3,
            'h-[800px]': stepIndex === 3,
          })}
        >
          <div
            id="step1"
            className={clsx({
              'absolute w-full pl-3 pr-3 transition-all duration-500 ease-in-out md:pl-16 md:pr-16':
                true,
              'left-0': stepIndex === 1,
              '-left-full': stepIndex > 1,
            })}
          >
            <Step1 onClick={handleNext} />
          </div>
          <div
            id="step2"
            className={clsx({
              'absolute w-full pl-3 pr-3 transition-all duration-500 ease-in-out md:pl-16 md:pr-16':
                true,
              'right-0': (stepIndex === 2 && olsStep.current < 2) || beforePrev,
              'left-0': (stepIndex === 2 && olsStep.current > 2) || beforeNext,
              '-left-full': stepIndex > 2,
              '-right-full': stepIndex < 2,
            })}
          >
            <Step2 onClick={handleNext} />
          </div>
          <div
            id="step3"
            className={clsx({
              'absolute w-full transition-all duration-500 ease-in-out': true,
              'right-0': stepIndex === 3,
              '-right-full': stepIndex < 3,
            })}
          >
            <Step3 />
          </div>
        </div>

        <Back stepIndex={stepIndex} onBack={handlePrev} />
      </main>
    </AppProvider>
  );
}
