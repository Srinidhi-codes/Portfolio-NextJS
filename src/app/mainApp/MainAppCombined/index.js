import Header from '@/app/components/Header'
import Nav from '@/app/components/Nav'
import TopLeftImg from '@/app/components/TopLeftImg'
import React from 'react'
import { Sora } from '@next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

function MainAppCombined(props) {
  return (
    <>
      <TopLeftImg />
      <Nav />
      <Header />
      <main className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>{props.children}</main>
    </>
  )
}

export default MainAppCombined