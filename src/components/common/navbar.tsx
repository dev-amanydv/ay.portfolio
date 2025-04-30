"use client"
import { outfit } from "@/lib/fonts";
import { motion } from "motion/react";
import { useRef, useState } from "react";

export default function Navbar ( ){

    return <div className="mt-15">
        <SlideTabs/>
    </div>
}

const SlideTabs = ()=>{
    const [position, setPosition] = useState({
        left:0,
        width: 0,
        opacity: 0
    })

    return (
        <ul
        onMouseLeave={()=>{
            setPosition(pv => ({
                ...pv,
                opacity: 0
            }))
        }}
        className={`flex relative backdrop-blur-xl mx-auto border-2 border-white bg-black p-1 w-fit text-[1.2rem] ${outfit.className} rounded-full`}>
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>Projects</Tab>
            <Tab setPosition={setPosition}>Contact</Tab>
            <Tab setPosition={setPosition}>Hire Me!</Tab>
            <Cursor position={position}/>
        </ul>
    )
}

const Tab = ({children, setPosition}: {
    children: React.ReactNode,
    setPosition: any
})=>{
    const ref = useRef<HTMLLIElement>(null)

return(
    <li ref={ref}
    onMouseEnter={()=>{
        if (!ref.current) return;
        
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
            width,
            left: ref.current.offsetLeft,
            opacity:1
        })
    }}
    className="cursor-pointer uppercase z-10 block text-white mix-blend-difference relative px-3 py-1.5 md:text-base md:px-5 md:py-3"
    >{children}</li>
     
)
}

const Cursor = ({position}: any)=>{
    return <motion.li
    animate={position}
    className="absolute z-0 h-7 rounded-full bg-white  md:h-12"/>
}

