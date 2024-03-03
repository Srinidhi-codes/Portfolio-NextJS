import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Socials from './Socials'

function Header() {
  return (
    <>
      <div className='absolute z-30 w-full'>
        <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
              <Link href={"/"} className=''>
                <Image src={"/assests/logo.svg"} width={220} height={48} alt='' priority={true} />
              </Link>
              <Socials />
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
