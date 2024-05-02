import clsx from "clsx"

interface SliderProps{
    label: string
    className: string
}

export default function Slider({label, className}: SliderProps){
    return (
        <>
            <div className="h-2 rounded-full bg-[#DCF3E8] relative">
                <div className={clsx("h-2 rounded-full bg-[#02FF83] absolute left-0", className)}>
                    <div className="absolute -bottom-2.5 flex flex-col w-full">
                        <div className="absolute bottom-8 -right-[30px] whitespace-nowrap md:text-base text-xs">
                            {label}
                        </div>
                        <div className="h-7 w-7 rounded-full bg-[#02FF83] flex justify-center items-center self-end text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}