"use client"

import { useRouter } from "next/navigation";
import React from "react";

interface BoxStep1Props{
    title: string;
    children: React.ReactNode
    onClick: () => void
}

export default function BoxStep1({title, children, onClick}: BoxStep1Props){
    const router = useRouter();
    function handleClick(){
        sessionStorage.setItem("dachform", title);
        onClick();
    }
    return(
        <div className="group md:basis-1/4 shadow-[0_0_40px_-15px_rgba(0,0,0,0.3)] h-28 md:h-72 rounded-xl text-dark-blue border border-solid border-white hover:border-dark-blue flex flex-row md:flex-col md:justify-center md:items-center gap-x-3" 
            onClick={handleClick}
        >
            <div className="md:mt-10">
                {children}
            </div>
            <div className="mt-8 md:mt-10 text-lg font-bold h-32 w-full group-hover:bg-dark-blue group-hover:text-white rounded-b-xl flex md:justify-center group-hover:pt-8 transition-all duration-600 p-3">{title}</div>
            
        </div>
    )
}