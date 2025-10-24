
import React from "react";
import Image from "next/image";


export const ItemSlider:React.FC<{title:string,description:string,image:string}>=(props)=>{
    



return(
           <li className="min-h-full min-w-full relative flex flex-col-reverse items-center text-[#cb1b16]">
                    <Image alt={props.title} fill src={props.image} className=" absolute top-0 min-w-full min-h-full ">
                               
                    </Image>
                        <div className="bg-gray-700 absolute top-0 min-w-full min-h-full z-10 opacity-70 ">

                        </div>
                         <p className="w-[95%] z-20 text-[7em] wrap-break-word mb-[7%] lg:mb-[5%] ">
                          {props.description}
                        </p>
                     
                     <h1 className=" w-full z-20 text-[10em] items-center underline font-bold hover:cursor-pointer" >

                         {props.title}
                     </h1>
                    
                                   
           </li>
    )


    
}