import ApiDashboard from '@/components/ApiDashboard'
import RequestApiKey from '@/components/RequestApiKey'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {}

const page = async(props: Props) => {

  const user =await getServerSession(authOptions)

  if (!user) {
    return notFound()
    
  }

const apiKey =await db.apiKey.findFirst({
  where:{userId:user.user.id}
})




  return (
    <div className='max-w-7xl mx-auto mt-16'>
      {apiKey?<ApiDashboard/>:<RequestApiKey/>}
    </div>
  )
}

export default page