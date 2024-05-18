import SkillItem from "./SkillItem";
import { SKILLS_DATA } from "../constants";
import { motion } from "framer-motion";


const Skills = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:-100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Skills</motion.h1>
            <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
                {SKILLS_DATA.map((skill, index) => {
                    return (
                        <SkillItem key={index} icon={skill.icon} skillName={skill.name}/>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Skills