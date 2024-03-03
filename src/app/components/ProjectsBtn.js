import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi2'

function ProjectsBtn() {
  return (
    <>
      <div className='mx-auto xl:mx-0'>
        <Link href={'/work'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
          <Image src={"/assests/rounded-text.png"} width={148} height={148} alt='' className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]' />
          <HiArrowDown className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
        </Link>
      </div>
    </>
  )
}

export default ProjectsBtn
