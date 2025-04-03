// import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'


const ClerkLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
            <div className='h-full items-center justify-center flex'>
                {children}
                </div>
  )
}

export default ClerkLayout
