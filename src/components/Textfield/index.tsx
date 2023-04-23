import { User,Lock } from "@/assets";
import { ReactElement, useState } from "react";
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import "./style.css"
interface Itextfield extends React.HTMLAttributes<HTMLElement>{
src:string;
varient:string;
}

export const Textfield = (proms:Itextfield) => {
    const [type,setType]=useState("password")
    const [eyeIcon,seteyeIcon]=useState(eyeOff)
const handleToggle=()=>{
    if(type==="password")
    {
        seteyeIcon(eye);
        setType("text");
    }
    else{
        seteyeIcon(eyeOff);
        setType("password");
    }
}

    switch(proms.varient){
case "Login":
    return (
        <div className="login-page bg-white ">
        <div>
            <img className="h-full" src={proms.src} alt="" />
        </div>
        <div>
        <h1 className="mt-24 ml-48 text-4xl	 font-bold mb-9">Login</h1>
        <div className="flex ml-16 items-center mb-10" style={{backgroundColor:"var(--skycolor)",width:"336px",height:"52px",borderRadius:"50px"}}>
            <div className="ml-6">{<User/>}</div>
            <input  type="text" className="bg-transparent w-full outline-none pl-1"/>
        </div>
        <div className="flex ml-16 items-center mb-1.5" style={{backgroundColor:"var(--skycolor)",width:"336px",height:"52px",borderRadius:"50px"}}>
            <div className="ml-6">{<Lock/>}</div>
            <input type={type} className="bg-transparent w-full outline-none pl-1"/>
            <span className="me-4"><Icon onClick={handleToggle} icon={eyeIcon}/></span>
            </div>
        <p className="ml-72 m-11">lupa password?</p>
        <button className="text-white text-xl font-bold ml-16 mb-6" style={{backgroundColor:"var(--dark-color)",width:"336px",height:"52px",borderRadius:"50px"}}>Masuk</button>
        <p className="ml-24 mb-16 ">belum punya akun ? <span>daftar sekarang</span></p>

        </div>
    </div>
    )
    case "Signup":
        return( <h1>Login</h1>)
    }
    return (  
<>
</>
     );
}
 
