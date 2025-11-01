
import React from "react";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import Link from "next/link";

export function Maincomment(){
    



return(
           <div className=" w- flex flex-col h-[23%] w-[97%] sm:w-[90%] xl:w-[60%] items-center justify-start mt-[5px] gap-[10px] ">
              <h2 className="underline  text-[6em] font-bold">  Comments {15}</h2>
                 <div className="w-[70%] flex flex-col mt-[10px] items-center gap-[8px]">
                         <Textarea className="bg-white text-black" placeholder="Type your comment here"></Textarea>
                          <Button className="w-[12%] bg-main text-white text-[4em] font-bold hover:bg-gray-500 hover:cursor-pointer"> ADD </Button>
                 </div>
                 <div className="flex flex-col w-[90%] border-t-1 border-black mt-[10px] ">
                       
                 </div>
            
          </div>
    )


    
}