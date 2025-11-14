
import Image from "next/image"

import { Pencil } from 'lucide-react';
import { Trash } from 'lucide-react';

export  function PostItemAdmin({title,mainimage,date,id}
  :{title:string,mainimage:string,date:Date,id:string}) {

  return (
       <div className="flex flex-row items-center  p-2 sm:p-6 justify-between  w-full bg-white h-[80px]   ">
            <div className="flex flex-row items-center gap-[10px] ">
                <div className="relative w-[60px] sm:w-[110px] xl:w-[140px] h-[65px]">
                    <Image alt="postitemAdmin" fill src={mainimage}></Image>
                 </div>
                 <p className="font-bold text-[4em] sm:text-[3.5em] md:text-[4em]  lg:text-[5.5em] "> {title}</p>
            </div>
            <div className="flex flex-row items-center gap-[10px]  sm:gap-[30px] ">
                     <Pencil  size={'6em'} color="#cb1b16" className="hover:cursor-pointer" ></Pencil>
                     <Trash size={'6em'} color="#cb1b16" className="hover:cursor-pointer"></Trash>
                     <p className="text-[3em] text-main">{ date.toLocaleDateString('en-US')}</p>
            </div>
                     

         
      </div>
  )

}