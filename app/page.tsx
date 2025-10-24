import { Metadata } from "next";
import { Header } from "@/components/header";
import { Slider } from "@/components/slider/slider";

export const metadata: Metadata = {
  title: "T-Tech",
  description: " Blog & Review for Technologies",
};

export default function Home() {
  return (
    <div >
      <Header></Header>
       <Slider></Slider>
    </div>
  );
}
