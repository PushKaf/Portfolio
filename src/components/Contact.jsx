import { CONTACT } from "../constants"
import { SiGmail } from "react-icons/si";


const Contact = () => {
    return (
        <div className="border-b border-neutral-800 pb-20">
            <h1 className="mt-10 mb-5 text-center text-4xl">Get in Touch</h1>
            <div className="text-center tracking-tighter flex justify-center">
                {/* <a href={`mailto:${CONTACT.email}`} className="border-b"><SiGmail size={30}/></a> */}
                <a href={`mailto:${CONTACT.email}`} className="border-b">Gmail</a>
                
            </div>
        </div>
    )
}

export default Contact