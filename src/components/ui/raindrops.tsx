import { motion } from "motion/react"
export const RainDrops = ()=>{

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
            {
                Array.from({length:50}).map((_, i)=>(
                    <div key={i} className="absolute  w-0.5 h-3 raindrop bg-white opacity-20 animate-raindrop"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay:`${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random() * 2}s`,
                        
                    }} >
                    </div>
                ))
            }
        </div>
    )
}