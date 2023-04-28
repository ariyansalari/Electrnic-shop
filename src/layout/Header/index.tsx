import { Headershop } from "@/assets";
import { Buttons } from "@/components";
import { Modal } from "@/components";
import { about, login, mycart, products } from "@/routes";

import  React, { useState }  from "react";
import { Link } from "react-router-dom";
import "./style.css"

interface Iheader extends React.HTMLAttributes<HTMLDivElement>{
    isShow?:boolean

}
export const Header = (proms:Iheader) => {
    const [openModal,setOpenModal]=useState(false)

    return ( 
        <header className="container mx-auto header-color rounded-t-2xl">
            <nav>
               <ul className="lg:flex md:flex sm:flex justify-between items-center ">
                <li className="font-bold  lg:text-3xl md:text-2x1 sm:text-xl shoply-text p-6 ml-4 ">Shoply. </li>
                <li className="flex gap-8 ">
                    <div className="text-base sm:text-sm home-menu font-bold"><Link to="/">Home</Link></div>
                    <span className="sm:text-sm">/</span>
                    <div className="text-base sm:text-sm"><Link to={products}>Products</Link></div>
                    <span className="sm:text-sm">/</span>
                    <div className="text-base sm:text-sm"><Link to={about}>About</Link></div>
                </li>
                <li className="flex gap-10">
                    <div className="lg:w-9 md:w-4 sm:w-1"><Link to={mycart}>{<Headershop/>}</Link></div>
                <Buttons className=" text-white flex justify-center items-center login-button me-10" text="Login" onClick={()=>setOpenModal(true)} />
                <Modal open={openModal} Onclose={()=>setOpenModal(false)}/>
                </li>
               </ul> 
            </nav>
        </header>
     );
}
 
