import { outfit } from "@/lib/fonts";
import { motion } from "motion/react";

export default function Navbar ( ){

    return <div className="relative flex justify-center w-full mx-auto backdrop-blur-xl">
        <ul className={`flex backdrop-blur-xl border-[1px] border-neutral-500 p-3  justify-center items-center h-15 absolute top-15 gap-5 w-5/10 text-[1.2rem] ${outfit.className} rounded-full justify-center absolute top-5 mx-auto`}>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Hire Me!</li>
        </ul>
    </div>
}