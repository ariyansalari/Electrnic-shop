import { ReactElement } from "react";
import { Footer } from "./Footer/index";
import { Header } from "./Header/index";

interface Ichildren{
    children:ReactElement;
}

export const Layout = ({children}:Ichildren) => {
    return ( 
        <>
        <Header></Header>
        <main className="container w-screen mx-auto">{children}</main>
        <Footer></Footer>
        </>
     );
}
 
