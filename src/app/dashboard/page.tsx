import Hero from '@/components/Hero'
import { getAuthSession } from '@/lib/nextauth'
import React from 'react'
import {redirect} from "next/navigation"
import QuizCard from '@/app/dashboard/QuizCard'
import HistoryCard from '@/app/dashboard/HistoryCard'
import HotTopicCard from '@/app/dashboard/HotTopicCard'
import RecentTopic from './RecentTopic'


type Props = {}

const Dashboard = async(props: Props) => {
    const session = await getAuthSession()
    if(!session?.user){
        return redirect("/")
    }
  return (
    <div className='pb-3 bg-slate-800'>
        <Hero imageHero='https://i.imgur.com/VBh8aeg.png' isDashboard/>
        <div className='grid gap-4 px-4 md:grid-cols-2 pb-3'>
            <QuizCard/>
            <HistoryCard/>
        </div>
        <div className='grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-7'>
            <HotTopicCard/>
            <RecentTopic/>
        </div>
    </div>
  )
}

export default Dashboard