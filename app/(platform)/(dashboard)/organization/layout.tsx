
import React from 'react'
import Sidebar from '../_component/Sidebar'


const OrganizationLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <main className='pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl '>
            <div className='flex gap-7'>
                <div className="w-64 shrink-0 hidden md:block">
                    {/* Sidebar */}
            <Sidebar />

                </div>
            {children}

            </div>
                </main>
  )
}

export default OrganizationLayout
