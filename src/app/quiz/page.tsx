import { getAuthSession } from '@/lib/nextauth'
import React from 'react'
import {redirect} from 'next/navigation'
import QuizCreation from './QuizCreation'
interface Props {
  searchParams: {
    topic?: string;
  };
}

const Quiz = async({searchParams}: Props) => {
    const session = await getAuthSession()
    if(!session?.user){
        return redirect('/')
    }
  return (
    <div className='pt-3 bg-slate-800 h-screen'>
        <QuizCreation topic={searchParams.topic ?? ""}/>
    </div>
  )
}

export default Quiz