'use client'

import React, { FC, useState } from 'react'
import Button from './ui/Button'
import { signIn } from 'next-auth/react'
import { toast } from './ui/Toast'

interface Props{}

const SignInButton:FC<Props> = ({}) => {


    const [isLoading,setIsLoading] =useState<boolean>(false)
    const signInWithGoogle=async()=>{
    setIsLoading(true)

    try {
        await signIn('google')
    } catch (error) {
        toast({
            title:'Error signing',
            message:'please try again',
            type:'error'
        })
    }
}

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
        Sign In
    </Button>
  )
}

export default SignInButton