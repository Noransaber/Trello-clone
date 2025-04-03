import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
          <Link href='/' className=''>
              <div
                  className="hover:opacity-75 transition  items-center gap-x-2 hidden md:flex"
              >
                  <Image
                      src='/logo.png'
                      height={50}
                      width={50}
                      alt='logo'
                  />
                                <p className="tex-lg text-neutral-700 pb-1 font-bold">
                  Taskify
              </p>
              </div>
          </Link>
    </div>
  )
}

export default Logo
