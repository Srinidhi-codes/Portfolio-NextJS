import Image from 'next/image'
import React from 'react'


function Avatar() {
  return (
    <>
      <div className='hidden xl:flex xl:max-w-none'>
        <Image src={"/assests/avatar.png"} width={737} height={678} alt='' className='translate-z-0 w-full h-full' />
      </div>
    </>
  )
}

export default Avatar