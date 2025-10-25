



import React from "react";
import { ItemReview } from "./item";


export function MainReviews(){
    



return(
           <section className="flex flex-col sm:flex-row h-[700px]  w-full justify-around p-2
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                   <div className=" w-[97%] h-[47%] sm:h-[80%] sm:w-[47%]">
                        <ItemReview title="FIRSTPOST" description="this is my first post in this app to test th ui look" 
                         image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg" ></ItemReview>
                   </div>
                  <div className="  h-[95%] w-[97%] sm:w-[47%] text-[0.8em] flex flex-col justify-around items-center">
                         <div className="w-[95%] h-[47%]">
                                <ItemReview title="FIRSTPOST" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg" ></ItemReview>
                         </div>
                           <div className="w-[95%] h-[47%]">
                                <ItemReview title="FIRSTPOST" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg" ></ItemReview>
                         </div>
                  </div>
                   
                                   
           </section>
    )


    
}