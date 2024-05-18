import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/about.jpeg"
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    const isSmallScreen = window.innerWidth < 640;

    return (
        <div className="border-b border-neutral-800 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl md:text-5xl sm:text-xl">{isSmallScreen ? "Pushkal K." : "Pushkal Kafley"}</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] bg-clip-text text-3xl tracking-tight text-transparent">
                            <TypeAnimation sequence={["Developer", 1500, "Technology Enthusiast", 1500, "Tinkerer", 1500, "Student.", 2000]} repeat={Infinity}/>
                        </motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className="max-w-xl py-5 font-light tracking-tighter lg:text-xl">{HERO_CONTENT}</motion.p>
                        <motion.a variants={container(1.5)} initial="hidden" animate="visible" className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md" href="https://drive.google.com/file/d/18MuMT40EJuhLpBMwOP0NEvTJwzsTpCUN/view?usp=sharing" target="_blank">Resume</motion.a>
                    </div>
                </div>
                <div className="mt-10 w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img className="rounded-2xl" initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={profilePic} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero