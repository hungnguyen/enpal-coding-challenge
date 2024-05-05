import clsx from 'clsx';
import { Path, UseFormRegister } from 'react-hook-form';
import { Inputs } from './Step3';

interface RadioButtonProps {
  label: string;
  name: Path<Inputs>;
  className?: string;
  register: UseFormRegister<Inputs>;
  value: string;
}

export default function RadioButton({
  label,
  name,
  className,
  register,
  value,
}: RadioButtonProps) {
  return (
    <div className={clsx('inline-block', className)}>
      <input
        type="radio"
        className="h-6 w-6 rounded-full text-blue-500"
        {...register(name)}
        defaultValue={value}
      />
      <label className="ml-2 text-lg">{label}</label>
    </div>
  );
}
