import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Medal } from 'lucide-react'
import { Lato } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
const textFont = Lato({
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin'],
})
const MarkingPage = () => {

  return (
    <div className='flex flex-col items-center justify-center '>
          <div className='flex flex-col items-center justify-center '>
              <div className='mb-4 flex items-center border shadow-sm p-4 bg-rose-200 text-rose-500 rounded-full uppercase'>
                  <Medal className={cn(
                      'h-6 w-6 mr-2',
                      textFont.className)} />
                  No 1 task management
              </div>
              <h1 className={cn('text-3xl md:text-6xl text-center text-neutral-800 mb-6', textFont.className)}>
                  Taskify helps team move
              </h1>
              <div className={cn("text-3xl md:text-6xl bg-gradient-to-r from-rose-400 to-rose-800 text-white font-bold px-4 p-2 rounded-md pb-4 w-fit", textFont.className)}>
                  Work Forwards.
              </div>
          </div>
          <div className={cn('text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto ', textFont.className)}>
              Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with Taskify
          </div>
          <Button className='mt-6' size="lg" asChild>
              <Link href="/sign-up">
                  Get taskify for free
              </Link>
          </Button>
    </div>
  )
}

export default MarkingPage
