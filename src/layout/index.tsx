import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/index";
import { Header } from "./Header/index";

export const Layout = () => {
    return ( 
        <>
        <Header></Header>
        <div>

        <Outlet />
        </div>
        <Footer></Footer>
        </>
     );
}
 
