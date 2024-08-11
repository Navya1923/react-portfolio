import { PiCloudSlash } from "react-icons/pi";
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Experience</h2>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
          <p className="mb-2 text-sm text-neutral-400">June 2024-Present</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Full Stack Developer(Intern)-
            <span className="text-sm text-purple-100">Xebia</span>
            </h6>
            <p className="mb-4 text Neutral-400"><li><b>Deployed</b> a fully containerized website on <b>Docker</b>, significantly boosting and reducing the deployment
time, allowing the seamless updates and enhanced performance under high traffic.</li></p>
<p className="mb-4 text Neutral-400"><li>Configured and maintained <b>GitHub repositories</b> for streamlined version control and seamless team
collaboration.</li></p>
<p className="mb-4 text Neutral-400"><li>Executed <b>CI/CD pipelines</b>, ensuring high code quality through automated testing.</li></p>
<p className="mb-4 text Neutral-400"><li>Collaborated effectively with the team, contributing to project development, deployment and fostering a <b>strong teamwork</b> environment.</li></p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">Docker</span>

            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">Git Repositories</span>

            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">CI/CD pipelines</span>
              </div>
              </div>     
    </div>
  )
}

export default Experience
