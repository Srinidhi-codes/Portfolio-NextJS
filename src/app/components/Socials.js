import Link from 'next/link'
import React from 'react'
import { RiGithubLine, RiInstagramLine, RiLinkedinFill, RiYoutubeLine } from "react-icons/ri"

const SocialIcons = [
  { path: '/', icon: <RiYoutubeLine /> },
  { path: '/', icon: <RiInstagramLine /> },
  { path: '/', icon: <RiLinkedinFill /> },
  { path: '/', icon: <RiGithubLine /> },
]

function Socials() {
  return (
    <>
      <div className='flex items-center gap-x-5 text-lg text-white'>
        {SocialIcons.map((element, idx) => <Link key={idx} href={element.path} className='hover:text-accent transition-all duration-300'>
          {element.icon}
        </Link>)}
      </div>
    </>
  )
}

export default Socials
