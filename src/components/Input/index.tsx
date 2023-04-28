import { InputHTMLAttributes } from "react";

interface Iinputs extends InputHTMLAttributes<HTMLInputElement>{
    type:string,
    placeholder?:string
}

export const Inputs = (proms:Iinputs) => {
    return ( 
        <input {...proms} type={proms.type} placeholder={proms.placeholder}/>
     );
}
 
