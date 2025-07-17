import {Container} from "@/components/Container/Container";
import {Hero} from "@/components/Hero/Hero";
import {HowItWork} from "@/components/HowItWork/HowItWork";
import {AboutUs} from "@/components/AboutUs/AboutUs";
import {ForWhom} from "@/components/ForWhom/ForWhom";
import {JoinIn} from "@/components/JoinIn/JoinIn";
import {Advantages} from "@/components/Advantages/Advantages";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWork />
      <AboutUs />
      <ForWhom />
      <JoinIn />
      <Advantages />
    </>
  );
}
