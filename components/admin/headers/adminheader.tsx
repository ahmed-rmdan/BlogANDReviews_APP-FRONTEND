'use client'

import React from "react";
import Link from "next/link";

import { AlignJustify } from 'lucide-react';
import { useState,useEffect } from "react";
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";

import { UserRoundPen } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { LogOut } from 'lucide-react';





import { House } from 'lucide-react';
import { Search } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Star } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { User } from 'lucide-react';
import Image from "next/image";


import { useRouter } from "next/navigation";

export function HeaderDashboard(){
    const router=useRouter()
const [width,setwidth]=useState<number>(0)
const [menu,setmenu]=useState<boolean>(false)
const [search,setsearch]=useState<boolean>(false)



useEffect(()=>{
setwidth(window.screen.width)
  window.addEventListener('resize',()=>{
     const size=window.screen.width
     setwidth(size)

  })

},[width])

function handleclick(){
    setmenu(prev=>!prev)
}

function handlenavigate(input:string){
  const section=document.getElementById(`section-${input}`)
  section?.scrollIntoView({behavior:'smooth'})
}
function handlesearch(){
  setsearch(prev=>!prev)
}

if(width>=768){
return(
           <nav className="flex flex-row xl:flex-row sticky  top-0  z-[10000]  min-w-full  p-5  
            items-center bg-[#cb1b16] text-white text-[2.5px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px] min-h-[30px]   ">


             <Link href={'/'} onClick={()=>{handlenavigate('1')}} className=" text-end  font-extrabold w-[55%] 
                                sm:text-[6.5em]  lg:text-[10em] 
                                hover:cursor-pointer   ">
                       FineTech
                
              </Link>
              <button className="w-[40%] flex flex-row justify-center items-center gap-[7px] font-bold ml-[10%]
               text-center sm:text-[4.5em] lg:text-[6em] hover:underline hover:cursor-pointer">
                   <LogOut size={'1em'} ></LogOut> LogOut
              </button>

                                   
           </nav>
    )
}
else {
  return(
   <nav className="flex flex-row sticky top-0 bg-[#cb1b16] text-white z-[10000]  min-w-full  p-3  justify-between 
  items-center  text-[2.5px]  min-h-[20px]   ">
             <div className="flex flex-row w-[100%] text-[1em] justify-between items-center gap-[5%]">
                  <AlignJustify color="white" className="min-w-[10%]" onClick={handleclick}></AlignJustify>
             
                      <div className="flex w-[75%] gap-[10%] flex-row items-center justify-center  ">
                          <Link href={'/'}  className=" text-center  font-extrabold w-[60%] 
                                text-[7em]  
                                hover:cursor-pointer ">
                                 FineTech
                
                          </Link>
                          <button className="w-[40%] flex flex-row justify-center items-center gap-[5px] font-bold 
                                text-center text-[4.8em] hover:underline hover:cursor-pointer">
                                      <LogOut size={'1.5em'} ></LogOut> LogOut
                             </button>
               
                    </div>
        
             </div>
             <AnimatePresence>
              {menu?<motion.div initial={{width:0,opacity:0}} animate={{width:150,opacity:100}} transition={{duration:0.5}}
              exit={{width:0,opacity:0}} className="flex flex-col absolute left-0 top-[48px] h-[850px] w-[35%] 
              items-center justify-start bg-[#cb1b16]  ">

                
                 <div className="flex flex-col w-full mt-[30px] min-h-[100%] items-center justify-start gap-[5%] text-[13px] 
              text-white font-semibold  ">
                          <div className="flex flex-row justify-start h-[5%] w-[70%] items-center">
                                <Moon size={'2em'}></Moon>
                               
                           </div>
                      <div className="flex flex-col w-full      items-center gap-[55px]">

                          <div className="flex flex-row gap-[5px] items-center">
                                <House size={'1.4em'}></House>
                               <Link href={'/'} className="hover:underline hover:cursor-pointer" > HOME</Link>
                           </div>
                              <div className="flex flex-row gap-[5px] items-center">
                                <Newspaper size={'1.4em'}></Newspaper>
                               <Link href={'/blog'}  onClick={()=>{handlenavigate('3')}} className="hover:underline hover:cursor-pointer text-[1.1em]" > Blog</Link>
                           </div>
                           
                              <div className="flex flex-row gap-[5px] items-center">
                                <Star size={'1.4em'}></Star>
                               <Link  href={'/reviews'}  className="hover:underline hover:cursor-pointer text-[1.05em]"> Reviews</Link>
                           </div>                                    
                      </div>
                      {/* <div className="flex flex-col w-full border-t-2 p-7   text-[1.1em]  items-center gap-[50px]">
                                  
                                  <Link href={'/login'}  >Login</Link>
                                   <Link href={'/signup'}  >Signup</Link>
                                                               
                      </div> */}
                     <div className=" flex flex-col items-center gap-[30px] border-t-2 text-[1em] p-7 ">
                            <div className=" relative w-[50px] h-[50px] rounded-[180%]">
                                <Image onClick={()=>router.push('/user/profile')}   src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
                                      alt="profilepic" fill className="rounded-[180%]" ></Image>
                                                              
                            </div>
                            <div className="flex flex-row gap-[7px] text-white">
                                 <UserRoundPen color="white"></UserRoundPen>
                                <Link href={'/user/edit'} className=" font-bold hover:underline"> Edit</Link>
           
                         </div>
                         <div className="flex flex-row gap-[7px] items-center">
                                <Bookmark ></Bookmark>
                               <Link href={'/user/saved'} className="  font-bold hover:underline"> Saved</Link>
            
                        </div>
                        <div className="flex flex-row text-center gap-[7px]">
                               <ThumbsUp ></ThumbsUp>
                             <Link href={'/user/liked'} className="  font-bold hover:underline"> Liked</Link>
              
                       </div>       
                       <div className="flex flex-row items-center gap-[7px]">
                            <LogOut ></LogOut>
                           <p   className=" font-bold hover:underline hover:cursor-pointer "> LogOut</p>
            
                      </div>            
                
                    </div>                      
                                               
                         
                            
                </div> 
                                    
             </motion.div>: ''}


             </AnimatePresence>
         
      
          

                         
  </nav>

  )
}
    
}