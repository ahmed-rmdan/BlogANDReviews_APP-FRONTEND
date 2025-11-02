
import React from "react";

import Image from "next/image";

import { ThumbsUp } from 'lucide-react';





export const SubComment:React.FC<{image:string,date:string,content:string,username:string}>=(props)=>{
    



return(
        <div className=" w-full flex flex-col ml-[12%] sm:ml-[10%] mt-[10px]">
           <div className="flex flex-row  justify-start items-start  gap-[8px] w-[70%] ">
                  <div className=" h-[60px] w-[60px] rounded-[180%] relative ">
                       <Image  alt="" fill src={props.image} className="absolute top-0 h-[60px] w-[60px] rounded-[180%]" ></Image>
                  </div>
                 <div className="flex  flex-col gpa-[3px]   ">
                       <p className="text-[3.5em] font-bold ">ahmed rAMADAN</p>
                       <p className="text-[3em] "> {props.date}</p>
                   <div className="h-full w-full text-[3.5em] ml-[4px]   ">
                        <p className="w-full  break-words  "> sadsadsadsadsadsadsadsadsadasd ahmed ramadan this beatifull 
                            how to beatifull sadsadsadsad sdafasf ahmed safdafsdafsafasfasfasfasfasfsafaf
                        </p>
                         <div className="flex flex-row items-center justify-start h-[20%] gap-[15px] mt-[5px]">
                                   <div className="flex flex-row items-center font-bold  gap-[5px]">
                                            <ThumbsUp size={'1.2em'} className="hover:cursor-pointer"></ThumbsUp>
                                                20
                                   </div>
                              
                         </div>

                    </div>
                 </div>
          
                 
            </div>

             

          
        </div>

    
)


    
}