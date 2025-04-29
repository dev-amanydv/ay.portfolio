"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { outfit, poppins, shadowsIntoLight } from "@/lib/fonts";

export default function Splash({children}:{children: React.ReactNode}) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Mark that we're on the client
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    // Render nothing on server
    return null;
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{
              duration: 1.3,
            }}
            exit={{
              filter: "blur(10px)",
              backgroundColor: "black", // screen turns black
              transition: { duration: 1.3 },
            }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden"
          >
            <motion.video
              src="/vid.mp4"
              autoPlay
              muted
              loop
              initial={{ opacity: 1, }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 1.3 },
              }}
              className="absolute w-full brightness-80 h-full object-cover"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 20, // Move text down while fading
                transition: { duration: 1 },
              }}
              transition={{ duration: 1.3, delay: 0.7 }}
              className={`${outfit.className} z-10 relative text-neutral-200 text-3xl md:text-4xl font-normal text-center`}
            >
              A new{" "}
              <span className={`${shadowsIntoLight.className} text-red-600`}>
                cracked
              </span>{" "}
              dev has entered the game.
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          className=" relative w-full h-screen bg-black overflow-hidden"
          key="main"
          initial={{ 
            filter: "blur(10px brightness(0)",
            opacity:0
           }}
            animate={{ filter: "blur(0px) brightness(1)" ,
              opacity: 1
            }}
            transition={{
              duration: 2,
              delay:1
            }}
        >

        <video src="/bg.mp4" autoPlay muted loop className="absolute h-full w-full object-cover" />
        <div className="relative flex flex-col h-full text-6xl  backdrop-blur-[1px] z-50 text-white">
        {children}
        </div>
        </motion.div>
      )}
    </div>
  );
}
