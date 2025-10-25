import { Metadata } from "next";
import { Header } from "@/components/header";
import { Slider } from "@/components/slider/slider";
import { MainReviews } from "@/components/reviews/main";
export const metadata: Metadata = {
  title: "True-Tech",
  description: " Blog & Review for Technologies",
};

export default function Home() {
  return (
    <div >
      <Header></Header>
       <Slider></Slider>
       <MainReviews></MainReviews>
    </div>
  );
}
