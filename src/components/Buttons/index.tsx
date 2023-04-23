import { ButtonHTMLAttributes } from "react";

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text?:string
}

export const Buttons = (proms:Ibutton) => {
    return ( 
        <button {...proms}>{proms.text} </button>
       
     );
}
 

