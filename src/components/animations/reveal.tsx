"use client"

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode,
    width? :"fit-content"| "100%"
}

export const Reveal = ({ children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
        console.log(isInView);
        if (isInView){
            //fire animation
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView])

return (
    <div 
    ref={ref}
    style={{position: "relative", width, overflow: "hidden"}}>
        <motion.div
        variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
            duration: 0.5,
            delay: 2
        }}
        
        >{children}</motion.div>
        <motion.div
        variants={{
            hidden: {left:0},
            visible:{left: "100%"}
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
            duration: 0.5,
            delay:1.5,
            ease: "easeIn"
        }}
        style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#2ec4b6",
            zIndex:20
        }}
        />

    </div>
)
}