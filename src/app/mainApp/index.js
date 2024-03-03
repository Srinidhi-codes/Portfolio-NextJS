import React from 'react'
import MainAppCombined from './MainAppCombined'

function MainApp({children}) {
  return (
    <>
        <MainAppCombined>{children}</MainAppCombined>
    </>
  )
}

export default MainApp