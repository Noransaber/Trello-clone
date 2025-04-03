import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  return (
      <div
          className='w-full flex bg-white px-4 h-14 border-b justify-between items-center fixed top-0 z-50 shadow-sm'>
          <div className="w-full flex items-center justify-between md:max-w-screen-2xl mx-auto">
              <Logo />
              <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                  <Button size="sm" asChild variant='outline'>
                      <Link href="/sign-in">
                          Login in
                      </Link>
                  </Button>

                  <Button size="sm" asChild >
                      <Link href="/sign-up">
                          Get taskify for free
                      </Link>
                  </Button>
              </div>
          </div>
    </div>
  )
}

export default Navbar
