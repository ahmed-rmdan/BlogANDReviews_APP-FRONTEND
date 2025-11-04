
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


export default function Signup(){
  return(
    <div className=" flex items-center justify-center h-[650px]  w-full bg-sec text-[3px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px] " >
         
         <div className="flex flex-col items-center justify-start bg-white p-6 w-[97%] sm:w-[85%] xl:w-[55%] 2xl:w-[50%] rounded-2xl gap-[25px] ">
            <h1 className="w-full underline font-extrabold text-main text-[8em] text-center"> SignUP</h1>
             <form className="flex flex-col items-center w-[95%] sm:w-[70%] lg:w-[60%] gap-[15px] text-[3em]">
                   <Input type="text" placeholder="your Name" />
                   {/* <p className="text-main font-semibold ">dsadsadsa</p> */}
                   <Input type="text" placeholder="username" />
                   {/* <p className="text-main font-semibold ">dsadsadsa</p> */}
                   <Input type="password" placeholder="password" />
                    {/* <p className="text-main font-semibold ">dsadsadsa</p> */}
                    <Input type="password" placeholder=" rewrite password" />
                    {/* <p className="text-main font-semibold ">dsadsadsa</p> */}
                     <Input type="email" placeholder=" email" />
                    {/* <p className="text-main font-semibold ">dsadsadsa</p> */}
                         <div className="flex items-start gap-3">
                           <Checkbox id="toggle"  />
                            <Label htmlFor="toggle">Enable notifications</Label>
                       </div>
                   
                    <Button type="submit" className="bg-main text-sec font-bold sm:text-[1.3em] w-[30%] sm:w-[20%] hover:bg-gray-500 hover:cursor-pointer">Submit</Button>
                    {/* <p></p> */}
             </form>

         </div>
         
        
    </div>
  )

}