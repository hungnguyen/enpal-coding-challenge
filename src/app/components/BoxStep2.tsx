"use client"

import clsx from "clsx";
import React from "react";

interface BoxStep2Props{
    title: string;
    children: React.ReactNode
    onClick: () => void
}

export default function BoxStep2({title, children, onClick}: BoxStep2Props){
    const currentValue = sessionStorage.getItem("dachform");
    function handleClick(){
        sessionStorage.setItem("dachfenster", title);
        onClick();
    }
    
    return(
        <div className="group md:basis-1/3 shadow-[0_0_40px_-15px_rgba(0,0,0,0.3)] h-28 md:h-72 rounded-xl flex flex-row md:flex-col md:justify-center md:items-center text-dark-blue gap-x-5 border border-solid border-white hover:border-dark-blue" 
                onClick={handleClick}
            >
                <div className="md:mt-10">
                    {children}
                </div>
                <div className={clsx("mt-10 h-32 w-full text-lg font-bold group-hover:bg-dark-blue group-hover:text-white rounded-b-xl flex md:justify-center group-hover:pt-8 transition-all duration-600 p-3",
                    currentValue === title ? "bg-dark-blue text-white pt-8" : ""
                )}>
                    {title}
                </div>
        </div>
    )
}