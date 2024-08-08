import React, { useState } from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import { AiFillGithub } from 'react-icons/ai'

const projects = [
    {
        img: project1,
        title: "Project-1",
        description : "Leadtym Website using ReactJs and TailwindCSS",
        links:{
            site : "https://leadtym-clone.vercel.app/",
            github: "https://github.com/Perwez087/Leadtym-Clone"
        }, 
    },
    
    {
        img: project2,
        title: "Project-2",
        description : "Education Website using ReactJs and TailwindCSS",
        links:{
            site : "https://education-app-sepia.vercel.app/",
            github: "https://github.com/Perwez087/Education-App"
        }, 
    },
    {
        img: project3,
        title: "Project-3",
        description : "Calendly-website using ReactJs and TailwindCSS",
        links:{
            site : "https://calendly-clone-tau.vercel.app/",
            github: "https://github.com/Perwez087/Calendly-clone"
        }, 
    },
]

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className='my-6 max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-4' id='portfolio'>
         
         <div className='relative z-10 md:col-span-3 col-span-8 grid place-items-center grid-cols-1 gap-4 md:gap-0'>
            <p className='text-gray-200 font-bold md:text-4xl text-2xl -skew-y-6'>Select Project</p>
            {/* <img src={arrow} className='absolute lg:w-[50px] w-[35px] lg:top-10 top-0 right-8 lg:right-12' alt="arrow"/> */}

            <ul className='ml-6 flex flex-col gap-6 flex-wrap justify-center md:gap-1 md:space-y-4 md:text-2xl md:mt-0 mt-4'>
               {
                projects.map((project, index)=>(
                    <li key={index} onClick={()=> setCurrentProject(index)} className={`cursor-pointer text-gray-300 ${currentProject === index ? 'active-project' : ''}`}>{project.title}</li>
                ))
               }
            </ul>
         </div>

         <div className='z-10 glass w-full md:col-span-5 col-span-8 p-2 '>
            <div className='w-full md:h-80'>
                <img src={projects[currentProject].img} alt={projects[currentProject].title}
                className='w-full h-full object-cover rounded-lg mb-4'/>
            </div>

            <div className='p-6'>
             <p className='text-gray-200 my-4'>{projects[currentProject].description}</p>
             <div className='flex space-x-4'>
               <a href={projects[currentProject].links.site} target='_blank' className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
               <a href={projects[currentProject].links.github} target='_blank' className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'><AiFillGithub size={20}/></a>
             </div>
            </div>
         </div>

    </div>
  )
}

export default Portfolio