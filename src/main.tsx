import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout";
import { about, home, login, mycart, products } from "./routes";
import { About, HomeScrenn, Login, Mycart, Products } from "./screens";

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[

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
                path:products,
            },
            {
                element:<Mycart/>,
                path:mycart
        
            },
        ]
    },

    
 
])


    ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
        <React.StrictMode>
          <RouterProvider router={routes} />
        </React.StrictMode>
    )