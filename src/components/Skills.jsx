import {RiReactjsLine} from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {RiHtml5Line} from "react-icons/ri";
import {RiTailwindCssLine} from "react-icons/ri";


const Skills = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-3">
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-3">
                    <SiMongodb className="text-7xl text-green-500"></SiMongodb>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-3">
                    <RiHtml5Line className="text-7xl text-orange-400"></RiHtml5Line>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-3">
                    <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
                </div>
                
                <div className="rounded-2xl border-4 border-neutral-800 p-3">
                    <RiTailwindCssLine className="text-7xl text-cyan-600"></RiTailwindCssLine>
                </div>
            </div>
          
        </div>
      )
    }
    

export default Skills
