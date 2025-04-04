import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'


const platformLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
            <ClerkProvider>
                {children}
                </ClerkProvider>
  )
}

export default platformLayout
