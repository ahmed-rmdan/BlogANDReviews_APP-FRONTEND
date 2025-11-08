
import Image from "next/image"

import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';
export  function PostItemAdmin() {

  return (
       <div className="flex flex-row items-center  p-2 sm:p-6 justify-between  w-full bg-white h-[80px]   ">
            <div className="flex flex-row items-center gap-[10px] ">
                <div className="relative w-[60px] sm:w-[75px] h-[65px]">
                    <Image alt="postitemAdmin" fill src="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></Image>
                 </div>
                 <p className="font-bold text-[4em] sm:text-[5.5em] "> First post</p>
            </div>
            <div className="flex flex-row items-center gap-[10px]  sm:gap-[30px] ">
                     <Pencil  size={'6em'} color="#cb1b16" className="hover:cursor-pointer" ></Pencil>
                     <Trash size={'6em'} color="#cb1b16" className="hover:cursor-pointer"></Trash>
                     <p className="text-[3em] text-main">25/10/2024</p>
            </div>
                     

         
      </div>
  )

}