'use client';

import clsx from 'clsx';
import React from 'react';

interface BoxStep2Props {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  selected: string | null;
}

export default function BoxStep2({
  title,
  children,
  onClick,
  selected,
}: BoxStep2Props) {
  function handleClick() {
    onClick();
  }

  return (
    <div
      className="group flex h-28 flex-row gap-x-5 rounded-xl border border-solid border-white text-dark-blue shadow-[0_0_40px_-15px_rgba(0,0,0,0.3)] hover:border-dark-blue md:h-72 md:basis-1/3 md:flex-col md:items-center md:justify-center"
      onClick={handleClick}
    >
      <div className="md:mt-10">{children}</div>
      <div
        className={clsx(
          'duration-600 mt-10 flex h-32 w-full rounded-b-xl p-3 text-lg font-bold transition-all md:justify-center md:group-hover:bg-dark-blue md:group-hover:pt-8 md:group-hover:text-white',
          selected === title ? 'md:bg-dark-blue md:pt-8 md:text-white' : '',
        )}
      >
        {title}
      </div>
    </div>
  );
}
