import clsx from 'clsx';
import Icon8 from '../icons/Icon8';
interface BackProps {
  stepIndex: number;
  onBack: () => void;
}
export default function Back({ stepIndex, onBack }: BackProps) {
  return (
    <div
      className={clsx(
        'absolute bottom-0 ml-4 cursor-pointer pb-4 pt-4 text-lg text-gray-600 md:bottom-10 md:ml-20',
        stepIndex === 2 ? 'block' : 'hidden',
      )}
      onClick={onBack}
    >
      <span>
        <Icon8 />
      </span>
      Zurück
    </div>
  );
}
