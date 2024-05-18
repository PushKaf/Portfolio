import { motion } from "framer-motion";


export const ExperienceItem = ({ experience }) => {
    return (
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="w-full max-w-xl lg:w-3/4 overflow-x-auto overflow-y-hidden">
                <h6 className="mb-2 font-semibold">
                    {experience.role} - <span className="text-sm text-cyan-100">{experience.company}</span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>

                {experience.technologies.map((tech, index) => (
                    <span key={index} className="mr-2 mt-4 mb-5 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-cyan-800">{tech}</span>
                ))}
            </motion.div>
        </div>
    )
}

export default ExperienceItem;

