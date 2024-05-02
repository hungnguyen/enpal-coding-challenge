import clsx from "clsx";
import { ChangeEvent } from "react";

interface RadioButtonProps{
    label: string;
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string
}

export default function RadioButton({label, name, onChange, className}: RadioButtonProps){
    return (
        <div className={clsx("inline-block", className)}>
            <input type="radio"  className="rounded-full text-blue-500 h-6 w-6" name={name} onChange={onChange}/> 
            <label className="text-lg ml-2">{label}</label>
        </div>
    )
}