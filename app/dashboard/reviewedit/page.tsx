

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
export default function ReviewEdit(){
  return(
    <div className=" min-w-[75%]   flex items-center justify-center p-5 " >
         <div className="bg-white flex flex-col w-[98%] sm:w-[90%] xl:w-[80%] items-center gap-[15px] p-5 rounded-2xl">
               <h1 className="text-main text-[9em] underline font-bold ">Add Review</h1>
                <form className="flex flex-col w-[85%] sm:w-[75%] xl:w-[60%] 2xl:w-[55%]  gap-[15px] ">
                           <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="Main Title">Main Title</Label>
                                  <Input
                                 id="Main Title"
                                  type="text"
                                placeholder=""
                                 required
                                     />
                                     {/* <p className="text-main font-semibold text-[1.8em] ">* dsadsadsa</p> */}
                            </div>                  
                           <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="Main Title">Main Image</Label>
                                  <Input
                                 id="Main Title"
                                  type="file"
                                placeholder=""
                                 required
                                     />
                                     {/* <p className="text-main font-semibold text-[1.8em] ">* dsadsadsa</p> */}
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="Description">Description</Label>
                                  <Input
                                 id="Description"
                                  type="text"
                                placeholder=""
                                 required
                                     />
                                     {/* <p className="text-main font-semibold text-[1.8em] ">* dsadsadsa</p> */}
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="content">Content</Label>
                                  <Textarea
                                 id="content"                                 
                                placeholder=""
                                 required
                                     />
                                     {/* <p className="text-main font-semibold text-[1.8em] ">* dsadsadsa</p> */}
                            </div>
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="summary">Summary</Label>
                                  <Textarea
                                 id="summary" 
                                                           
                                placeholder=""
                                 required
                                     />
                                     {/* <p className="text-main font-semibold text-[1.8em] ">* dsadsadsa</p> */}
                            </div> 
                            <div className="grid gap-2 text-[2em]">
                               <Label className="text-[2.5em]" htmlFor="score">Score</Label>
                                  <Input
                                 id="score"                                 
                                placeholder=""
                                 required
                                 type="number"
                                 max={10}
                                     />
                                     {/* <p className="text-main font-semibold text-[1.8em] ">* dsadsadsa</p> */}
                            </div>                             
                                 {/* <p className="text-main font-semibold text-[2em] ">* dsadsadsa</p> */}
                               <Button className="w-[30%] self-center !text-[4em] mt-[10px] hover:cursor-pointer bg-main hover:bg-gray-500"> Submit </Button>                                                     
                 </form>
         </div>

         
         
        
    </div>
  )

}