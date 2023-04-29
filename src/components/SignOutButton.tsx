'use client'

import React, { FC, useState } from 'react'
import Button from './ui/Button'
import { signIn, signOut } from 'next-auth/react'

interface Props{}

const SignOutButton:FC<Props> = ({}) => {

    const [isLoading,setIsLoading] =useState<boolean>(false)
const signUserOut=async()=>{
    setIsLoading(true)

    try {
        await signOut()
    } catch (error) {
        // toast({
        //     title:'Error signin out',
        //     message:'please try again',
        //     type:'error'
        // })
    }
}

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
        Sign Out
    </Button>
  )
}

export default SignOutButton