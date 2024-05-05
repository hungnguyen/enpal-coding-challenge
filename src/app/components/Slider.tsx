import clsx from 'clsx';

interface SliderProps {
  label: string;
  className: string;
}

export default function Slider({ label, className }: SliderProps) {
  return (
    <>
      <div className="relative h-2 rounded-full bg-[#DCF3E8]">
        <div
          className={clsx(
            'absolute left-0 h-2 rounded-full bg-[#02FF83]',
            className,
          )}
        >
          <div className="absolute -bottom-2.5 flex w-full flex-col">
            <div className="absolute -right-[30px] bottom-8 whitespace-nowrap text-xs md:text-base">
              {label}
            </div>
            <div className="flex h-7 w-7 items-center justify-center self-end rounded-full bg-[#02FF83] text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
