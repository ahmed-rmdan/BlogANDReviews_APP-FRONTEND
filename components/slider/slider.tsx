



import React from "react";
import { ItemSlider } from "./item";


export function Slider(){
    



return(
           <section className="flex flex-col h-[550px] sm:h-[650px]  w-full justify-center
            items-center text-white text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                    <div className=" w-[95%] sm:w-[85%]  xl:w-[80%] 2xl:w-[60%]  h-[85%] relative justify-center items-center bg-black ">
                             <div className="min-w-full min-h-full  flex flex-row overflow-hidden">
                                     <ul className="min-w-full min-h-full flex flex-row translate-x-[-100%]">
                                   <ItemSlider title="FIRSTPOST" description="thisdsadsadsadadsadsadsdsadsadasdsadasdasdsadasdsadsadsadsdsadsadsadsadsadsadsadsasadsads" image="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"></ItemSlider>
                                   <ItemSlider title="FIRSTPOST" description="thisdsadsadsadadsadsadsdsadsadasdsadasdasdsadasdsadsadsadsdsadsadsadsadsadsadsadsasadsads" image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ItemSlider>
                                    </ul>
                             </div>
                              <div className="flex flex-row items-center absolute bottom-[2.5%] sm:bottom-[4%] xl:bottom-[4.5%] right-[10%] w-[80%] h-[5%] gap-[3%] justify-center wrap-break-word ">
                                  <button className=" h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] rounded-[180%] bg-[#cb1b16] "></button>
                                  <button className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] rounded-[180%] bg-white "></button>
                                  <button className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] rounded-[180%] bg-white "></button>
                                 
                               </div>

                    </div>
                  
                   
                                   
           </section>
    )


    
}