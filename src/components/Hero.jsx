import React from 'react'
import profilepic from "../assets/ppic.png"
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiBootstrap, DiMongodb, DiJava, DiExtjs } from 'react-icons/di'
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from 'react-icons/ri'
import resume from "../assets/MdWali.pdf"

const Hero = () => {
    return (
        <div className='w-full max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0' id='home'>

            <div className='grid md:grid-cols-2 md:col-span-5 p-8 glass'>

                <img className='w-[800px]' src={profilepic} alt="profile pic" />

                <div className='my-auto md:ml-8 flex-col text-gray-200'>
                    <p className='text-xl md:text-4xl font-bold'> Hi! I am <br/> Md Wali <br />
                        <TypeAnimation
                            sequence={[
                                "Frontend Dev",
                                1000,
                                "Web Designer",
                                1000,
                                "Full stack Dev",
                                1000,
                                "Social Media Manager",
                                1000,
                                "Video Editor",
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>

                    <p className='text-xl md:text-3xl font-semibold text-gray-400 mb-4'>with a 2+ years experience</p>
                    <a href={resume} className='mt-4 md:px-4 md:py-2 py-1 px-2 text-lg font-bold text-white bg-primary-color rounded-xl' >Download CV</a>
                </div>
            </div>

            <div className='grid md:col-span-3 gap-6'>

               <div className='text-5xl md:p-12 p-4 glass'>
                  <p className='text-gray-200 text-xl font-bold mb-4 text-center'>My Tech Stack</p>
                  <div className='grid grid-cols-4 gap-4'>
                      <DiJava className='text-blue-400'/>
                      <DiHtml5 className='text-orange-600'/>
                      <DiCss3 className='text-blue-600'/>
                      <DiJavascript1 className='text-yellow-500'/>
                      <DiMongodb className='text-green-800'/>
                      <SiExpress className='text-gray-500'/>
                      <DiReact className='text-blue-500'/>
                      <DiNodejsSmall className='text-green-500'/>
                      <DiBootstrap className='text-purple-600'/>
                      <RiTailwindCssFill className='text-blue-600'/>
                  </div>
               </div>

               <div className='md:text-6xl text-3xl gap-4 flex justify-center items-center glass  text-gray-600'>
                 <AiFillGithub/>
                 <AiFillLinkedin/>
                 <AiFillInstagram/>
               </div>
            </div>
        </div>
    )
}

export default Hero