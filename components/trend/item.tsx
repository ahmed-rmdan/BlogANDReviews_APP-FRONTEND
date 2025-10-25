
import React from "react";
import Image from "next/image";


export const ItemTrend:React.FC<{title:string,description:string,image:string}>=(props)=>{
    



return(
           <div className="min-h-full min-w-full bg-[#cb1b16] relative flex flex-col items-center text-white ">
                  
                    
                     <div className="w-full min-h-[50%] relative">
                          <Image alt={props.title} fill src={props.image} className=" absolute top-0 min-w-full min-h-full ">
                               
                          </Image>
                            <div className="bg-gray-700 absolute top-0 min-w-full min-h-full z-10 opacity-70 ">

                           </div>
                    </div>
                    <div className="w-[95%] h-[50%] flex flex-row item-center justify-center ">
                           <div className="w-[90%] flex flex-col">
                                <h1 className=" w-full z-20 text-[10em] items-center underline font-bold hover:cursor-pointer" >

                                    {props.title}
                                </h1>
                                  <p className="w-[95%] z-20 text-[7em] wrap-break-word mb-[7%] lg:mb-[5%] ">
                                  {props.description}
                                 </p>
                           </div>
                            <div className="w-[10%]">
                               

                            </div>
                           
                          
                    
                     </div>
                   
                                   
           </div>
    )


    
}