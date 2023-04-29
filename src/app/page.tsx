import Image from 'next/image'
import { Inter } from 'next/font/google'
import Heading from '@/components/ui/LargeHeading'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-cyan-800">
     <Heading size='sm' >  yo oy  </Heading>                                             
    </main>
  )
}
