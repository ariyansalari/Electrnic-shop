import { ReactElement } from "react";
import { Textfield } from "../Textfield";
import "./style.css"

export const Modal = ({open,Onclose}:any) => {
    if(!open) return null
    return ( 
        <div className="overlay">
           <Textfield varient="Login" className="loginmodal-btn" src="../../public/Photo/Login/LoginImage.png"/> 
           <p onClick={Onclose} className="absolute right-48 top-2 p-4">X</p>
         
        </div>
     );
}
 
