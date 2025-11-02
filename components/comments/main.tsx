
import React from "react";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Comment } from "./comment";
import Link from "next/link";

export function Maincomment(){
    



return(
           <div className=" w- flex flex-col h-[23%] w-full sm:w-[90%] xl:w-[60%] items-center justify-start mt-[5px] gap-[10px] ">
              <h2 className="underline  text-[6em] font-bold">  Comments {15}</h2>
                 <div className=" w-[90%] sm:w-[70%] flex flex-col mt-[10px] items-center gap-[8px]">
                         <Textarea className="bg-white text-black" placeholder="Type your comment here"></Textarea>
                          <Button className=" w-[20%] sm:w-[12%] bg-main text-white text-[5em] sm:text-[4em] font-bold hover:bg-gray-500 hover:cursor-pointer"> ADD </Button>
                 </div>
                 <div className="flex flex-col w-[95%] sm:w-[90%] border-t-1 border-black mt-[10px] gap-[5px] ">
                       <Comment date="4/1/2025" content="sadsadsadsadsadsadasda" username="ahmed"
                        image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></Comment>
                        <Comment date="4/1/2025" content="sadsadsadsadsadsadasda" username="ahmed"
                        image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></Comment>
                 </div>
            
          </div>
    )


    
}