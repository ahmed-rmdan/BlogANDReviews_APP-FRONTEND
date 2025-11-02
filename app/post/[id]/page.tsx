import { Post } from "@/components/posts/post";
import { Maincomment } from "@/components/comments/main";


export default function Postpg() {
  return (
    <section className=" w-full flex flex-col items-center bg-[#e5e7eb] text-[3px] sm:text-[3px]   lg:text-[3.5px]  xl:text-[4px] 2xl:text-[4.5px] p-3  " >
                 <Post content="this is the best that how to endure the pain the pain the pain the pain oooooooosdsadasdasdsadsadsadsadsadsad ffefe" date="5/9/2025" title="first post" description="this is my first post in this app to test th ui look" 
                                image="https://cdn.pixabay.com/photo/2025/10/09/14/14/muztagh-9883659_1280.jpg" ></Post>      
                <Maincomment></Maincomment>
    </section>
  );
}