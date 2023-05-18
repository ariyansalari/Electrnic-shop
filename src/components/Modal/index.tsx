import { Login } from "@/screens";
import { ReactElement, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import "./style.css"
import { IconButton } from "@mui/material";


const modal_style={
   position:"fixed",
   top:"50%",
   left:"50%",
   transform:"translate(-50%,-50%)",
   padding:"50px"

}

export const Modal = ({children,open,Onclose}:any) => {
   if(!open) return null
    return ( 

<div style={modal_style}>
   <div className="absolute right-14 top-12">
      <IconButton onClick={Onclose} >

      <CloseIcon/>
      </IconButton>
   </div>
{children}
    </div>

   
  
        
     );
}
 
