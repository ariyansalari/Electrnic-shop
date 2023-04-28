import { HomeScrenn,Login } from "@/screens";
import { About,Products,Mycart } from "@/screens";
import { ReactElement } from "react";

interface router{
    element:ReactElement;
    path:string;
}

export const home="/"
export const login="/Login"
export const about="/About"
export const products="/Products"
export const mycart="/MyCart"

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
    },
    {
        element:<Mycart/>,
        path:mycart

    }
]
