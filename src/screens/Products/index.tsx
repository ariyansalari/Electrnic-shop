import { ButtomArrow, Search } from "@/assets";
import { Buttons, Card, Inputs } from "@/components";
import { AllCards } from "@/routes/Allproducts";
import { Todotype } from "@/types";
import { useState } from "react";
import "./style.css"
export const Products = () => {

    return (
        <div className="container mt-14 mx-auto">
        <div className="flex rounded-lg  items-center gap-4 mb-12" style={{boxShadow:"0 6px 10px 0 ",height:"74px"}}>
<h1 className="text-3xl ml-6">Home</h1>
<span className="text-3xl">{">"}</span>
<h1 className="font-bold text-3xl" style={{color:"var(--text)"}}>Product</h1>
        </div>



<div className="flex ">
    <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-16">Filter</h1>

        <div>
            <h1 className="text-base font-bold">Product Category</h1>
            <form action="">
            <div className="flex">
<h3 className="text-base">Electronic</h3>
<Inputs type="checkbox" />
            </div>
            <div className="flex">
<h3 className="text-base">Jawelery </h3>
<Inputs type="checkbox" />
            </div>
            <div className="flex">
<h3 className="text-base">Women’s Clothing</h3>
        <Inputs type="checkbox" />
            </div>
            <div className="flex">
<h3 className="text-base" >Men’s Clothing</h3>
            <Inputs type="checkbox" />
            </div>

            <div className="flex items-center justify-center">
           <h3>Others</h3>
           <span className="p-2">{<ButtomArrow/>}</span>
            </div>

            <div>
                <h1 className="font-bold text-base mb-4">Price range</h1>
                <div>
                <Inputs style={{height:"31px",backgroundColor:"var(--milky)",width:"100px",border:"1px solid #C5C5C5"}} type="serach" placeholder="Min" className="outline-none rounded-lg mr-3"/>
                <Inputs style={{height:"31px" ,width:"100px",border:"1px solid #C5C5C5"}} type="text" placeholder="Min" value="$400" className="font-bold text-center outline-none rounded-lg"/>
                </div>
            <Inputs className="setprice-filter text-white" type="Submit" value="Set Price"/>
            </div>

            <Buttons text="Clear Filter"/>
            </form>
        </div> 
    </div>

    <div className="ml-14 mb-44">
        
    <div className="flex grow items-center rounded-3xl" style={{backgroundColor:"var(--milky)",height:"56px"}}>
        <div className="ml-7">{<Search/>}</div>
    <Inputs type="serach" placeholder="" className="bg-transparent grow outline-none ml-4"/>
    </div>
    <div className="grid grid-cols-4  gap-8">
          {AllCards.map((i)=>(
            <Card key={i.src} className={i.classname} src={i.src}/>
          ))}
          </div>

    </div>
</div>

    </div>
      );
}
 
