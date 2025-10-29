
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
export  function Searchinput(){

return(
    <form className="flex flex-row w-[65%] sm:w-[50%] gap-[10px] sm:gap-[20px] items-center text-white h-[90%]   ">
      
     <Input type="text" className=" border-[#cb1b16] text-[5em] border-2 text-[#cb1b16] bg-white "  />
      <Button type="submit" variant="outline" className=" bg-[#cb1b16] hover:bg-[#cb1b16] text-[4em] w-[30%] sm:w-[22%] hover:cursor-pointer hover:text-white " >
         <Search className="w-[25%]  " ></Search> Search
      </Button>
    </form>
   

)

}