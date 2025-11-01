
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
export  function Searchinput(){

return(
    <form className="flex flex-row w-[65%] sm:w-[50%] gap-[10px] sm:gap-[20px] items-center text-white h-[90%]   ">
      
     <Input type="text" className=" border-[#cb1b16] text-[5em] border-2  !h-[30px] sm:!h-[40px] text-[#cb1b16] bg-white "  />
      <Button type="submit" variant="outline" className=" bg-[#cb1b16] hover:bg-[#cb1b16] text-[4.5em] !h-[30px]
       sm:!h-[40px] gont-bold w-[28%] sm:w-[22%] hover:cursor-pointer hover:text-white " >
          Search
      </Button>
    </form>
   

)

}