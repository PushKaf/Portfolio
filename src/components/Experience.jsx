import { EXPERIENCES_DATA } from "../constants"
import ExperienceItem from "./ExperienceItem"
import { motion } from "framer-motion";


function Experience() {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:-100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Experience</motion.h1>
            <div>
                {EXPERIENCES_DATA.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))}
            </div>
        </div>
    )
}

export default Experience