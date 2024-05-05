import { useState } from 'react';
import BoxStep1 from './BoxStep1';
import { setDachform } from '../context/reducer';
import { useAppDispatch } from '../context/store';
import Icon1 from '../icons/Icon1';
import Icon2 from '../icons/Icon2';
import Icon3 from '../icons/Icon3';
import Icon4 from '../icons/Icon4';

interface Step1Props {
  onClick: () => void;
}

export default function Step1({ onClick }: Step1Props) {
  const [selectedValue, setSelectedValue] = useState<string | null>('');
  const dispatch = useAppDispatch();
  function handleClick(value: string) {
    setSelectedValue(value);
    setDachform(value, dispatch);
    onClick();
  }
  return (
    <>
      <div className="pl-4 pr-4">
        <div className="mt-10 w-full text-gray-600">
          Kostenloser Solarstrom-Check in einer Minute.
        </div>
        <div className="mt-3 w-full text-xl font-bold text-dark-blue">
          Welche Dachform hat Ihr Haus?
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-3 md:flex-row md:gap-8">
        <BoxStep1
          title="Satteldach"
          onClick={() => handleClick('Satteldach')}
          selected={selectedValue}
        >
          <Icon1 />
        </BoxStep1>

        <BoxStep1
          title="Flachdach"
          onClick={() => handleClick('Flachdach')}
          selected={selectedValue}
        >
          <Icon2 />
        </BoxStep1>

        <BoxStep1
          title="Pultdach"
          onClick={() => handleClick('Pultdach')}
          selected={selectedValue}
        >
          <Icon3 />
        </BoxStep1>

        <BoxStep1
          title="Anderes"
          onClick={() => handleClick('Anderes')}
          selected={selectedValue}
        >
          <Icon4 />
        </BoxStep1>
      </div>
    </>
  );
}
