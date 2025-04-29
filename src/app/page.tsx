import Navbar from "@/components/common/navbar";
import Hero from "@/components/sections/hero";
import Splash from "@/components/ui/splash";

export default function Home() {
  return (
    <div className="flex w-8/10 mx-auto flex-col" >
      {/* <RainDrops/> */}
      <Splash>
        <Navbar/>
        <Hero/>

      </Splash>
    </div>
  );
}
