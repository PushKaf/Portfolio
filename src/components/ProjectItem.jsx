import { motion } from "framer-motion";
import { Scrollbars } from 'react-custom-scrollbars-2';


const ProjectItem = ({ project }) => {
    return (
        <motion.div whileHover={{scale: 1.05}} className="overflow-y-hidden lg:w-1/3 bg-neutral-900 rounded-xl border-4 mb-4 border-neutral-800 p-3 flex flex-wrap lg:justify-center">
            <h1 className="mb-2 text-xl font-semibold">{project.title}</h1>
            <p>{project.description}</p>

            <div className="w-full text-center justify-center m-5">
                {project.github ? (
                    <a className="bg-purple-500 hover:bg-purple-700 text-white rounded shadow-md m-2 px-3 py-0.5 border-4" href={project.github} target="_blank">GitHub</a>
                ) : (
                    <span></span>
                )}

                {project.website ? (
                    <a className="bg-green-500 hover:bg-green-700 text-white rounded shadow-md m-2 px-3 py-0.5 border-4" href={project.website} target="_blank">Website</a>
                ) : (
                    <span></span>
                )}
            </div>

            <Scrollbars style={{ width: "100%", height: "100%" }} autoHide autoHeight autoWidth>
                {project.technologies.map((tech, idx) => (
                    <span key={idx} className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}
            </Scrollbars>
        </motion.div>
    )
}

export default ProjectItem