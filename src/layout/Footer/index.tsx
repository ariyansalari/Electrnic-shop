import { Facebook,Instagram,Twitter,Youtube } from "@/assets";
import "./style.css"
export const Footer = () => {
    return ( 
        <footer className="footer-background container mx-auto rounded-b-2xl" >
            <ul className="flex justify-between items-center md:flex sm:flex lg:flex">
                <li className="p-10">
                    <h1 className="text-white font-bold text-3xl">Shoply.</h1>
                    <p className="text-white text-lg">© Copyright 2021. Created by OurTeam</p>
                </li>
                <li className="flex gap-4 p-8">
                    <div>{<Facebook/>}</div>
                    <div>{<Instagram/>}</div>
                    <div>{<Twitter/>}</div>
                    <div>{<Youtube/>}</div>
                </li>
            </ul>
        </footer>
     );
}
 
