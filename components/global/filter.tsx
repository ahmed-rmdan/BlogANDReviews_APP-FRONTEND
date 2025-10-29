'use client'
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from 'lucide-react';
import { useState } from "react";

export  function Filter(){
const [clicked,setclicked]=useState<boolean>(false)
function handleclick(){
setclicked(prev=>!prev)
}
return(
 
 <div onClick={handleclick}  className="flex relative items-center justify-center w-[10%] sm:w-[6%] bg-[#cb1b16] h-[40%] !text-[0.8em] rounded-[5px] text-white hover:cursor-pointer">
         <SlidersHorizontal ></SlidersHorizontal>
   {  clicked &&     <div className="absolute flex flex-col items-center justify-center top-[40px] gap-[5px] w-[95px] sm:w-[140px]
     text-[#cb1b16] text-[6em] sm:text-[5em] rounded-[4px] 
           border-1 z-50 bg-white border-[#cb1b16] hover:cursor-auto ">
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold " onClick={()=>{
                    console.log('a')
                   }}>Newest</button>
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold ">Oldest</button>
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold"> Most liked </button>
                   <button className="w-full hover:bg-[#cb1b16] hover:text-white hover:cursor-pointer font-semibold"> Less liked </button>
                   
          </div>}
 </div>

   

)

}