import { Shops } from "@/assets";
import { ReactElement } from "react";
import { Buttons } from "../Buttons";

interface Icard{
    src:string
    className?:string|undefined;

}

export const Card = (proms:Icard) => {
    return ( 
    
        <div className="relative">
            
            <img className={` `} src={proms.src} alt="" />
       <button  className={`${proms.className}`} style={{width:"52px",height:"36px"}}>{<Shops/>}</button>
       <Buttons text="DETAIL" className="text-white absolute bottom-4 left-8 rounded-lg " style={{backgroundColor:"var(--text)", width:"138px",height:"36px"}}/>
        </div>
       
     );
}

