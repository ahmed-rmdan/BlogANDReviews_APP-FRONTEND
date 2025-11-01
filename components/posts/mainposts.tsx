



import React from "react";
import { ItemPost } from "./itempost";
import Link from "next/link";

export function MainPosts(){
    



return(
           <section className="flex flex-col h-[750px] sm:h-[1000px] lg:h-[1100px]  xL:h-[1300px]  w-full justify-around p-2
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between w-full min-h-[90%] items-center ">
                         <ItemPost title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ItemPost>
                                     <ItemPost title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ItemPost>
                                     <ItemPost title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ItemPost>
                                     <ItemPost title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ItemPost>
                      </div>
                      <Link href={'/blog'} className=" h-[45px] sm:h-[55px] w-[30%] sm:w-[15%] xl:w-[10%] flex items-center 
                       justify-center text-[5.5em] rounded-2xl font-extrabold bg-[#cb1b16] hover:bg-gray-600 ">
                                 ALL POSTS
                      </Link>
                                   
           </section>
    )


    
}