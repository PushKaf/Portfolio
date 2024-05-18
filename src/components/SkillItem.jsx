import { DiCode } from "react-icons/di";
import { motion } from "framer-motion";


const SkillItem = ({ icon, skillName}) => {
    const IconComponent = icon?.component;

    return (
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-3 text-center flex flex-wrap items-center justify-center">
            {IconComponent ? (
                    <IconComponent className={`text-7xl ${icon.className}`}/>
            ) : (
                <DiCode className="text-7xl text-red-400" /> 
            )}

            <p>{skillName}</p>
        </motion.div>
    );
};

export default SkillItem;
