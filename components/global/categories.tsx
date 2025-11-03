
import { Button } from "@/components/ui/button"
import { Option, SlidersHorizontal } from 'lucide-react';


export const Categories:React.FC<{}>=(props)=>{

return(
 
      <div   className="flex relative items-center justify-center !h-[25px] mt-[15px] sm:!h-[40px] w-[35%] sm:w-[20%] xl:w-[17%]  !text-[5em]
             rounded-[5px] text-white hover:cursor-pointer">
                 
                 <select defaultValue={'ALL Reviews'}  className="w-full h-full bg-main text-white p-1 hover:cursor-pointer font-bold  rounded-[5px]  ">
                          <option className="hover:bg-main" >ALL Reviews</option>
                          <option value={'Phones'} >Phones</option>
                          <option value={'Hardware'}>Hardware</option>
                          <option value={'Elctronics'}>Elctronics</option>
                          <option value={'Tv'}>Tv</option>
                 </select>
         
          </div>

   

)

}