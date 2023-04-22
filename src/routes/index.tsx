import { HomeScrenn,Login } from "@/screens";
import { ReactElement } from "react";

interface router{
    element:ReactElement;
    path:string;
}

export const home="/"
export const login="/Login"

export const routes:router[]=[
    {
        element:<HomeScrenn/>,
        path:home,
    },
    {
        element:<Login/>,
        path:login,
    }
]
