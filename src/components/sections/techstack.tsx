import { outfit, poppins } from "@/lib/fonts";
import { BiLogoVisualStudio } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiZod,
  SiFramer,
  SiRedis,
  SiSocketdotio,
  SiOpenapiinitiative,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma,
  SiFirebase,
  SiVercel,
  SiNx,
  SiTurborepo
} from "react-icons/si"



export default function TechStack (){

    return <div className="pt-55">
        <div className="flex flex-col ">
            <h1 className={`${outfit.className} uppercase mb-10 font-bold text-[2rem] text-center text-neutral-350 `}>Skills</h1>
            <div>
                <div className="flex flex-col flex-start">
                    <h2 className={`${poppins.className} uppercase text-[1.5rem] font-semibold mb-5`}>Tech Stack</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    { stack.map(stack => (
                      <div className="flex flex-col items-center w-35 h-25 justify-center bg-black hover:shadow-sm hover:border-white shadow-white p-4 border border-neutral-500 rounded-lg">
                        <div>{stack.icon}</div>
                        <h4 className={`${poppins.className} text-sm text-center mt-2`}>
                          {stack.name}
                        </h4>
                      </div>
                    ))}
                    </div>
                </div>
                <div className="flex mt-15 flex-col flex-start">
                    <h2 className={`${poppins.className} uppercase text-[1.5rem] font-semibold mb-5`}>Tools</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    { tools.map(tools => (
                      <div className="flex flex-col items-center w-35 h-25 justify-center p-4 border border-neutral-500 rounded-lg">
                        <div>{tools.icon}</div>
                        <h4 className={`${poppins.className}  text-sm text-center mt-2`}>
                          {tools.name}
                        </h4>
                      </div>
                    ))}
                    </div>
                </div>

            </div>

        </div>
        
    </div>
}

const stack = [
  { name: "React", icon: <SiReact color="#61DAFB" size={35} /> },
  { name: "NextJS", icon: <RiNextjsFill color="white" size={38} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={35} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={35} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={35} /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={35} /> },
  { name: "MonoRepos", icon: <SiTurborepo color="red" size={35} /> },
  { name: "Prisma", icon: <SiPrisma color="white" size={35} /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" size={35} /> },
  { name: "Express", icon: <SiExpress color="white" size={35} /> },
  { name: "NodeJS", icon: <SiNodedotjs color="#339933" size={35} /> },
  { name: "Zod", icon: <SiZod color="#3E73C1" size={35} /> },
  { name: "Motion", icon: <SiFramer color="yellow" size={35} /> },
  { name: "Redis", icon: <SiRedis color="#DC382D" size={35} /> },
  { name: "WebSockets", icon: <SiSocketdotio color="white" size={35} /> },
  { name: "OpenAPI", icon: <SiOpenapiinitiative color="#6BA539" size={35} /> }
];

const tools = [
  { name: "Git", icon: <SiGit color="#F05032" size={35} /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" size={35} /> },
  { name: "Spline", icon: <SiFigma color="" size={35} /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" size={35} /> },
  { name: "VS Code", icon: <BiLogoVisualStudio color="#007ACC" size={35} /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" size={35} /> },
  { name: "Firebase", icon: <SiFirebase color="orange" size={35} /> },
  { name: "Vercel", icon: <SiVercel color="white" size={35} /> }
];