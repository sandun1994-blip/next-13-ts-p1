'use client'
import React, { ReactNode } from 'react'
import {ThemeProvider} from 'next-themes'
import {SessionProvider} from 'next-auth/react'
type Props = {children:ReactNode}

const Provider = ({children}:Props) => {

  console.log('render');
  
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider>
      {children}
      </SessionProvider>
      
      </ThemeProvider>
  )
}

export default Provider