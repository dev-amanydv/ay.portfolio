"use client"
import { poppins, roboto } from "@/lib/fonts";
import { ThreeDCardDemo } from "../ui/card3d";
import RobotModel from "../robot/RobotModel";
import { motion } from "motion/react";
import { HomeIcon} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Hero (){

    return <section id="home" className="">
        <div className="grid grid-cols-2 relative top-50">
            <div className={`${poppins.className} pl-15 flex ml-10 text-neutral-200 flex-col justify-center `}>
                <motion.h1 
                initial={{opacity:0, x:-50, scale:0.95}}
                animate={{opacity:1, x: 0 , scale: 1}}
                transition={{
                    duration: 1.3,
                    delay:2,
                    //ease: "easeInOut"
                    type: "spring"
                }}
                className="text-5xl font-bold">Hey, myself <span className=" font-bold">Aman</span><span className="text-green-300">.</span></motion.h1>
                <motion.h3
                initial={{opacity:0, x:+50, scale:0.95}}
                animate={{opacity:1, x: 0 , scale: 1}}
                transition={{
                    duration: 1.3,
                    delay:2,
                    //ease: "easeInOut"
                    type: "spring"
                }}
                 className="text-[2.0rem] mt-2 font-thin">I'm a <span className="font-bold text-green-300 text-[2.0rem]">Full Stack Developer</span><br /><span className={`rounded-full relative top-2 ${roboto.className} text-[15px] py-[5px] px-[10px] bg-green-950   text-green-600 font-semibold ` } ><span className="text-3xl relative top-[6px]">&#x2022; </span> <span>Open to work</span></span></motion.h3>
                <motion.p
                initial={{opacity:0, y:20, }}
                animate={{opacity:1, y: 0 ,}}
                transition={{
                    duration: 1.2,
                    delay:2,
                    ease: "easeOut"
                    //type: "spring"
                }} className="text-[1.0rem] mt-10 text-neutral-500">A creative Full Stack Developer focused on building scalable and impactful web applications. 
                </motion.p>
                <div className="flex font-semibold text-[0.9rem] mt-7 text-neutral-300 justify-between">
                    <div className="flex items-center gap-2">
                        <span> <HomeIcon className="text-neutral-500"/></span>
                        <span className="text-neutral-300">Jaipur, Rajasthan</span>
                    </div>
                    <div className="flex gap-6 text-neutral-300">
                        <a href="https://www.linkedin.com/in/devamanydv/">
                            <div className="flex items-center gap-2">
                                <span><FaLinkedin className="text-xl text-blue-600" /></span>
                                <span>
                                    LinkedIn
                                </span>
                            </div>
                        </a>
                        <a href="https://github.com/dev-amanydv">
                            <div className="flex items-center gap-2">
                                <span><FaGithub className="text-xl text-neutral-500"/></span>
                                <span>
                                GitHub 
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <motion.div
            initial={{opacity:0, x:80, }}
            animate={{opacity:1, x: 0 ,}}
            transition={{
                duration: 1.2,
                delay:2,
                //ease: "easeOut"
                type: "spring"
            }} className="flex justify-center items-center">
                <RobotModel />
            </motion.div>
        </div>

    </section>
}