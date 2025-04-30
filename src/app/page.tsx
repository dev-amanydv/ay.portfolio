import Navbar from "@/components/common/navbar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/techstack";
import Splash from "@/components/ui/splash";

export default function Home() {
  return (
    <div className="flex w-7/10 mx-auto flex-col" >
      {/* <RainDrops/> */}
      <Splash>
        <Navbar/>
        <Hero/>
        <TechStack/>
        <Projects/>

      </Splash>
    </div>
  );
}
