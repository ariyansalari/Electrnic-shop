import { HomeScrenn,Login } from "@/screens";
import { About } from "@/screens/About";
import { Products } from "@/screens/Products";
import { ReactElement } from "react";

interface router{
    element:ReactElement;
    path:string;
}

export const home="/"
export const login="/Login"
export const about="/About"
export const products="/Products"

export const routes:router[]=[
    {
        element:<HomeScrenn/>,
        path:home,
    },
    {
        element:<Login/>,
        path:login,
    },
    {
        element:<About/>,
        path:about,
    },
    {
        element:<Products/>,
        path:products
    }
]
