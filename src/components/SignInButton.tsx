'use client'

import React from 'react'
import { Button } from './ui/button'
import {signIn} from "next-auth/react"


type Props = {
    text: string
}
 
const SignInButton = ({text}: Props) => {
  return (
    <div className='flex items-center'>
        <Button variant={"secondary"} onClick={()=> signIn("google").catch(console.error)}>
            {text}
        </Button>
    </div>
  )
}

export default SignInButton