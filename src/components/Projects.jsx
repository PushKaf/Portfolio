import ProjectItem from "./ProjectItem"
import { PROJECTS_DATA } from "../constants"
import { motion } from "framer-motion";


const Projects = () => {
    return (
        <div className="border-b border-neutral-800 pb-4">
            <motion.h1 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:-100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Projects</motion.h1>
            <motion.div className="flex flex-wrap items-center justify-center gap-4">
                {PROJECTS_DATA.map((project, index) => (
                    <ProjectItem key={index} project={project}/>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects