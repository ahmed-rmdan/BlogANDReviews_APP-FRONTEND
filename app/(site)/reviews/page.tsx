import { Metadata } from "next";
import { Searchinput } from "@/components/global/search";
import { Filter } from "@/components/global/filter";
import { ReviewItem } from "@/components/reviews/itemreview";
import { Categories } from "@/components/global/categories";

export const metadata: Metadata = {
  title: "FineTech-BLOG",
  description: "Recent NEWS and Articles about the technologies ",
};

export default function Blog() {
  return (
    <section className=" w-full flex flex-col items-center bg-[#e5e7eb] text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]   " >
      <Categories></Categories>
      <div className="flex flex-row w-full sm:w-[85%] lg:w-[70%] 2xl:w-[55%] justify-center items-center h-[55px] sm:h-[80px] gap-[11px] sm:gap-[20px]">
           
            <Searchinput></Searchinput>
           <Filter type="reviews" ></Filter>
      </div>
               <section className="flex flex-col h-[750px] sm:h-[1000px] lg:h-[1100px]  xL:h-[1300px]  w-full justify-around 
            items-center text-white bg-[#e5e7eb] text-[2.5px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px]    ">
                      <div className="flex flex-col justify-between w-full min-h-[95%] items-center ">
                         <ReviewItem title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ReviewItem>
                                     <ReviewItem title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ReviewItem>
                                     <ReviewItem title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ReviewItem>
                                     <ReviewItem title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg"></ReviewItem>
                      </div>
                  
                                   
           </section>
 
    </section>
  );
}
