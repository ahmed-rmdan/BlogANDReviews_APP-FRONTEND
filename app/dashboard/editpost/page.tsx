

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
export default function Eddpost(){
  return(
    <div className=" min-w-[75%]   flex items-center justify-center p-5 " >
         <div className="bg-white flex flex-col w-[98%] sm:w-[80%] items-center gap-[15px] p-5 rounded-2xl">
               <h1 className="text-main text-[9em] underline font-bold ">Edit Post</h1>
                <form className="flex flex-col w-[85%] sm:w-[70%] xl:w-[50%]  gap-[15px] ">
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
                              <div className="flex items-center gap-3 mt-2">
                                      <Checkbox id="terms" />
                                    <Label className="font-semibold text-[3.5em]" htmlFor="terms">Add the post to the main Home page Slider</Label>
                             </div>  
                                 {/* <p className="text-main font-semibold text-[2em] ">* dsadsadsa</p> */}
                               <Button className="w-[30%] self-center !text-[4em] mt-[10px] hover:cursor-pointer bg-main hover:bg-gray-500"> Submit </Button>                                                     
                 </form>
         </div>

         
         
        
    </div>
  )

}