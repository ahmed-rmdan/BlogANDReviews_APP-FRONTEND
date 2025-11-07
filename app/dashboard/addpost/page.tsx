

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Login(){
  return(
    <div className=" min-w-[75%]   flex items-center justify-center" >
         <div className="bg-white flex flex-col w-[80%] items-center gap-[15px] p-5 rounded-2xl">
               <h1 className="text-main text-[9em] underline font-bold ">Add Post</h1>
                <form className="flex flex-col w-[50%]  gap-[15px] ">
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
                               <Label className="text-[2.5em]" htmlFor="Description">Description</Label>
                                  <Input
                                 id="Description"
                                  type="text"
                                placeholder=""
                                 required
                                     />
                                     {/* <p className="text-main font-semibold text-[1.8em] ">* dsadsadsa</p> */}
                            </div>                                                          
                 </form>
         </div>

         
         
        
    </div>
  )

}