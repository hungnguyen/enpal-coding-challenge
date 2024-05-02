import clsx from "clsx";
import { ChangeEvent, ComponentProps } from "react";

interface TextBoxProps extends ComponentProps<"input">{
    label: string;
    errors: string[] | undefined
}

export default function TextBox({label, errors, ...rest}: TextBoxProps){
    return (
        <div className="mt-3">
            <label htmlFor={rest.id} className="mb-1">{label}</label>
            <div id={`${rest.name}-error`} aria-live='polite' aria-atomic="true" className="inline-block ml-3">
                {
                    errors &&
                        errors.map((error: string)=>(
                        <p className='text-sm text-red-500' key={error}>
                            {error}
                        </p>
                        )
                    )
                }
            </div>
            <input {...rest} className={clsx("rounded-md border-gray-400 w-full", rest.className, errors ? "border-red-500" : "")} aria-describedby={`${rest.name}-error`}/>
        </div>
    )
}