import clsx from 'clsx';
import {
  FieldError,
  Path,
  UseFormRegister,
  ValidationRule,
} from 'react-hook-form';
import { Inputs } from './Step3';

interface TextBoxProps {
  name: Path<Inputs>;
  label: string;
  error?: FieldError;
  register: UseFormRegister<Inputs>;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  className?: string;
  placeholder?: string;
}

export default function TextBox({
  name,
  label,
  error,
  register,
  required,
  pattern,
  placeholder,
  className,
}: TextBoxProps) {
  return (
    <div className="mt-3">
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
      {error && (
        <span className="ml-3 text-red-500">This field is required</span>
      )}
      <input
        id={name}
        placeholder={placeholder}
        {...register(name, { required, pattern })}
        className={clsx(
          'w-full rounded-md border-gray-400',
          className,
          error ? 'border-red-500' : '',
        )}
      />
    </div>
  );
}
