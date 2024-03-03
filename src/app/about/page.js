"use client"
import React, { useState } from 'react'
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { motion } from "framer-motion"
import { fadeIn } from '../components/Variants';
import Avatar from '../components/Avatar';
import Circles from '../components/Circles';


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
  {
    title: 'Awards',
    info: [
      {
        title: 'NCC',
        stage: '2011',
      },
      {
        title: 'Drawing',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

function About() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
        <Circles />
        <motion.div
          className='hidden xl:flex absolute bottom-0 -left-[370px]'
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          aniimate='show'
          exit='hidden'
        >
          <Avatar />
        </motion.div>
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

          <div className='flex-1 flex flex-col justify-center'>text</div>
          <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, idx) =>
                <div onClick={() => setIndex(idx)} key={idx} className={`${index === idx && 'text-accent after:bg-accent after:w-full after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}>{item.title}</div>
              )}
            </div>
            <div className='bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, idx) =>
                <div key={idx} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, idx) =>
                      <div key={idx} className='text-2xl text-white'>{icon}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About