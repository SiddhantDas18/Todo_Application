import { ReactElement } from "react";

interface ButtonParameters{
    varient: "Primary"| "Secondary",
    size:'sm'| 'bg' | 'lg',
    text:string,
    startIcon?:ReactElement,
    endIcon?:ReactElement,
    onClick?:()=>void,
    className?:string
}

export const BasicButton=(props: ButtonParameters)=>{
    const baseStyle="flex items-center gap-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer"

    const varientStyle ={
        Primary:"bg-blue-400 text:white hover:bg-blue-600 active:bg-blue-500",
        Secondary:"bg-red-400 text:white hover:bg-red-500 active:bg-red-600"
    }

    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-md",
        lg: "px-6 py-3 text-lg"
    }


    //@ts-ignore
    return <button className={`${baseStyle}, ${varientStyle[props.varient]}, ${sizeStyles[props.size]},onClick={props.onClick}`}>
        {props.startIcon}
        {props.text}
        {props.endIcon}
    </button>
}