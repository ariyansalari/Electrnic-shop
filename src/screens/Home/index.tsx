import { RightArrow } from "@/assets";
import { Buttons } from "@/components";
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
            <div className="mouseblack-size flex justify-end mt-20">
               <img className="" src="../../public/Photo/mouseblack.png" alt="" />
            </div>
        </div>
            {/*  */}

{/* our parents */}
                <div className="flex justify-center mb-16 mt-52">
                    <h1 className="text-5xl font-bold" style={{color:"var(--text)"}}>Our Partners</h1>
                </div>
            <div>
                <div>
                    <div className="flex justify-center gap-28">
                        <img src="../../public/Photo/morgan.png" alt="" />
                        <img src="../../public/Photo/oysho.png" alt="" />
                        <img src="../../public/Photo/pull-bear.png" alt="" />
                        <img src="../../public/Photo/rosewood.png" alt="" />
                    </div>
                </div>
            </div>
            {/*  */}

               <div className="flex justify-center">
                <h1 className="text-5xl	font-bold mb-20 mt-44" style={{color:"var(--text)"}}>Product</h1>
               </div>
            <div className="grid grid-cols-4  ml-10">
           <div><img src="../../public/Photo/products/Rectangle 103.png" alt="" /></div>
           <div><img src="../../public/Photo/products/Rectangle 104.png" alt="" /></div>
           <div><img src="../../public/Photo/products/Rectangle 105.png" alt="" /></div>
           <div><img src="../../public/Photo/products/Rectangle 106.png" alt="" /></div>
           <div className="mt-11"><img src="../../public/Photo/products/Rectangle 107.png" alt="" /></div>
           <div className="mt-11"><img src="../../public/Photo/products/Rectangle 108.png" alt="" /></div>
           <div className="mt-11"><img src="../../public/Photo/products/Rectangle 109.png" alt="" /></div>
           <div className="mt-11"><img src="../../public/Photo/products/Rectangle 110.png" alt="" /></div>
            </div>
            {/* all products butoon */}
            <div className="flex backgroundButton-products justify-center items-center rounded-sm mx-auto mt-16" >
                <Buttons className="text-white" text="All Product" />
                <image className="ml-1.5">{<RightArrow fill="white"/>}</image>
            </div>
            {/*  */}


      </div>
     );
}
 
