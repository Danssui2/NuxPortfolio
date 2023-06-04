import React from 'react'
import { Link } from 'react-scroll'

import SocialMedia from '../../components/SocialMedia'
import { personalinfo } from '../../utils/constants'
import profile from '../../assets/images/avatar-home-model.jpg'


export default function HomeModel() {
  return (
    /* This is a React component that renders a section of a webpage with a hero image and some text
    content. The section has an ID of "hero" and a class name of "text-gray-600 mt-24 pb-16". The
    section contains a flexbox with two child elements: a div with a class name of "md:w-1/2" and an
    image with a class name of "object-cover md:w-1/3 w-5/6 object-center". The div contains some
    text content, including a heading, some social media links, and two buttons. The image is a
    profile picture. */
    <section id='hero' className="text-gray-600 mt-24 pb-16">
      <div className='flex flex-col md:flex-row gap-12 md:items-center justify-center'>
        {/* Mobile Image */}
        <img
          className="object-cover md:hidden md:w-1/3 w-5/6 object-center"
          alt="profile"
          src={profile}
        />
        
        <div className='md:w-1/2'>
          <div className='flex items-center gap-4 ml-2'>
            <h2 className='text-xl text-gray-500'>I'm Diora Nux</h2>
            <div className='w-[10%] border-b-2 border-b-gray-500'></div>
          </div>
          <div className='flex flex-col gap-y-8'>
            <h1 className='xl:text-6xl lg:text-5xl text-4xl text-gray-700 dark:text-gray-100'>A PROFESSIONAL MODEL BASED IN LUXEMBOURG</h1>
            <SocialMedia/>
            <div className="flex">
              <a href={personalinfo.cvLinkDownload}>
                <button className="text-white bg-primary-500 py-2 px-6 hover:brightness-110 text-center">
                  Download CV
                </button>
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-150}
                className="ml-4 cursor-pointer inline-flex text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:scale-105 text-lg"
              >
                Hire Me
              </Link>         
            </div>
          </div>
        </div>
        <img
          className="object-cover hidden md:block md:w-1/3 w-5/6 object-center"
          alt="profile"
          src={profile}
        />
      </div>
    </section>
  )
}
