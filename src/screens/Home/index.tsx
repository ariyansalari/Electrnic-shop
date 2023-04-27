import {  RightArrow} from "@/assets";
import { Buttons } from "@/components";
import { Card } from "@/components/Card";
import { products } from "@/routes";
import { Cards } from "@/routes/products";
import { Link } from "react-router-dom";
import "./style.css"
export const HomeScrenn = () => {
    return ( 
      <div className="container">

        {/* title */}
        <div className="flex">
            <div className="ml-10 mt-20">
                <h1 className="font-bold text-6xl w-3/5 titlemouse-color">Logitech G Pro X Superlight</h1>
                <p className="text-2xl paragrapgh-main mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh erat</p>
                <Buttons className="login-button text-white mt-12 " text="Shop Now "/>
            </div>
            <div className="mouseblack-size mt-20">
               <img className="" src="../../public/Photo/Body/mouseblack.png" alt="" />
            </div>
        </div>
            {/*  */}

{/* our parents */}
                <div className="flex justify-center mb-16 mt-52">
                    <h1 className="text-5xl font-bold" style={{color:"var(--text)"}}>Our Partners</h1>
                </div>
            <div>
                <div>
                    <div className="flex justify-center gap-28 mb-28">
                        <img src="../../public/Photo/Body/morgan.png" alt="" />
                        <img src="../../public/Photo/Body/oysho.png" alt="" />
                        <img src="../../public/Photo/Body/pull-bear.png" alt="" />
                        <img src="../../public/Photo/Body/rosewood.png" alt="" />
                    </div>
                </div>
            </div>
            {/*  */}
<div style={{backgroundColor:"#F8F8F8"}} className="pb-16">
               <div className="flex justify-center">
                <h1 className="text-5xl	font-bold mb-20 mt-14" style={{color:"var(--text)"}}>Product</h1>
               </div>
            <div className="grid grid-cols-4  ml-10">
          {Cards.map((i)=>(
            <Card key={i.src} className={i.classname} src={i.src} />
          ))}
            </div>
            {/* all products butoon */}
            <div className="flex backgroundButton-products justify-center items-center rounded-sm mx-auto mt-16 " >
                <Link to={products}><Buttons className="text-white " text="All Product" /></Link>
                <image className="ml-1.5">{<RightArrow fill="white"/>}</image>
            </div>

            </div>
            {/*  */}

{/* BEst */}
<h1 className="text-5xl	font-bold flex justify-center mt-36 m-32">Benefits Using Our Service</h1>

<div className="flex justify-center gap-20">
    <div className="flex flex-col items-center" >
        <img src="../../public/Photo/Body/Quality.png" alt="" />
        <h1>Best Quality</h1>
        <p className="w-72 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id </p>
    </div>
    <div  className="flex flex-col items-center">
    <img src="../../public/Photo/Body/Freeshoping.png" alt="" />
    <h1>Free Shipping</h1>
    <p className="w-72 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id </p>
    </div>
    <div  className="flex flex-col items-center">
    <img src="../../public/Photo/Body/Waranty.png" alt="" />
    <h1>Warranty</h1>
    <p className="w-72 text-xl text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id </p>
    </div>
</div>
{/*  */}

<div style={{backgroundColor:"#F8F8F8"}} className="pt-24 mt-16">
    <h1 className="text-5xl	 font-bold flex justify-center mb-24">What Our Costumers Are Saying</h1>

    <div className="flex pb-36" >
        <div>
            <img className="ml-44" src="../../public/Photo/Body/purple-women.png" alt="" />
        </div>
        <div className="ml-60">
            <h1 className="text-4xl	font-old mb-12">Help us Improve our productivity</h1>
            <p className="w-3/6  leading-7	">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id tincidunt feugiat, metus orci sagittis elit, quis tempor orci elit id arcu. Proin egestas bibendum efficitur. </p>
            <h1 className="text-2xl	font-bold mt-10">Adriana Lopez</h1>
            <p className="text-xl">Client</p>
        </div>
    </div>
</div>
      </div>
     );
}
 
