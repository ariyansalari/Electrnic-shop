import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup"
import { useCallback } from "react";
import { logintype } from "./Logintype";

export const Uselogin = () => {

    const loginSchema=yup.object({
        email:yup.string().required().email(),
        password:yup.string().required()
        })

        const handlelogin=useCallback((data:logintype)=>{
console.log(data)
        },[])
        
        
            const {register,formState:{errors},handleSubmit}=useForm<logintype>({
                resolver: yupResolver(loginSchema),
                mode:"onSubmit"
            })
    return{
register,
errors,
handleSubmit,
handlelogin,
    }
}
