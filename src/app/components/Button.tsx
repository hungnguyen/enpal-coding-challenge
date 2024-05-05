import clsx from 'clsx';
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
}

export default function Button({ label, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'text-md w-full rounded-full bg-[#02FF83] p-3 font-bold',
        rest.className,
      )}
      {...rest}
    >
      {label}
    </button>
  );
}
