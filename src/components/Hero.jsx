import profilePic from "../assets/pic2.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex Wrap">
            <div className="w-full  lg:w-1/2">
               <div className="flex flex-col items-center lg:items-start">
                 <h1 className="pb-10 text 5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Navya Ghildiyal</h1>
                 <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Thapar Institute of Engineering and Technology, Patiala
                 </span>
                 <p className="my-2 max-w-xl py-6 font-light tracking-tightly text-justify">Final year student, pursuing Computer Engineering at Thapar Institute of Engineering and technology. I am hardworking, passionate and dedicated towards my work. I have the capability to work under pressure. Seeking for a role where I can apply the skills that I have learnt till now.</p>
                </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                  <div className="flex justify-center">
                    <img src={profilePic} alt="Navya Ghildiyal"/>
                  </div>
                </div>
        </div>
      
    </div>
  )
}

export default Hero
