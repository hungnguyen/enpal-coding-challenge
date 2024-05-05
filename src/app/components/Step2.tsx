import { useState } from 'react';
import BoxStep2 from './BoxStep2';
import { setDachfenster } from '../context/reducer';
import { useAppDispatch } from '../context/store';
import Icon5 from '../icons/Icon5';
import Icon6 from '../icons/Icon6';
import Icon7 from '../icons/Icon7';

interface Step2Props {
  onClick: () => void;
}

export default function Step2({ onClick }: Step2Props) {
  const [selectedValue, setSelectedValue] = useState<string | null>('');
  const dispatch = useAppDispatch();
  function handleClick(value: string) {
    setSelectedValue(value);
    setDachfenster(value, dispatch);
    onClick();
  }
  return (
    <>
      <div className="pl-4 pr-4">
        <div className="mt-10 w-full text-gray-600">
          Kostenloser Solarstrom-Check in einer Minute.
        </div>
        <div className="mt-3 w-full text-xl font-bold text-dark-blue">
          Besitzt Ihr Haus Gauben oder Dachfenster?
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-3 md:flex-row md:gap-8">
        <BoxStep2
          title="Ja"
          onClick={() => handleClick('Ja')}
          selected={selectedValue}
        >
          <Icon5 />
        </BoxStep2>

        <BoxStep2
          title="Nein"
          onClick={() => handleClick('Nein')}
          selected={selectedValue}
        >
          <Icon6 />
        </BoxStep2>

        <BoxStep2
          title="Weiß nicht"
          onClick={() => handleClick('Weiß nicht')}
          selected={selectedValue}
        >
          <Icon7 />
        </BoxStep2>
      </div>
    </>
  );
}
