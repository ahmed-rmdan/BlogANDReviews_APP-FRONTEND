
import React from "react";
import Image from "next/image";


export const ItemTrend:React.FC<{title:string,description:string,image:string}>=(props)=>{
    



return(
           <div className=" h-[32%] w-[95%] sm:h-[33%] sm:w-[75%] lg:h-[80%] lg:w-[32%] bg-[#cb1b16] relative flex flex-col items-center rounded-[5px] text-white ">
                  
                    
                     <div className="w-full min-h-[60%] relative rounded-[5px]  ">
                          <Image alt={props.title} fill src={props.image} className=" absolute top-0 min-w-full min-h-full rounded-[5px] ">
                               
                          </Image>
                            <div className="bg-gray-700 absolute top-0 min-w-full min-h-full z-10 opacity-70 rounded-[5px] ">

                           </div>
                           <div className="absolute w-[90px]  h-[40px] sm:w-[115px] sm:h-[50px] z-10 rounded-2xl text-white flex  items-center justify-center text-center font-extrabold text-[3.5em] bg-[#cb1b16] top-[20px] left-[20px]">
                                  Top Reading
                           </div>
                    </div>
                    <div className="w-[98%] max-h-[40%] flex flex-row item-center justify-center ">
                           <div className="w-full flex flex-col">
                                <h1 className=" w-full z-20 text-[9em] items-center underline font-bold hover:cursor-pointer" >

                                    {props.title}
                                </h1>
                                  <p className="w-[95%] z-20 text-[6em] wrap-break-word overflow-auto mb-[5%] sm:mb-[2%] lg:mb-[5%] ">
                                  {props.description}
                                 </p>
                           </div>
                       
                           
                          
                    
                     </div>
                   
                                   
           </div>
    )


    
}