
import React from 'react'
import Navbar from './_component/Navbar'


const DashboardLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div >
            <Navbar />  
                {children}
                </div>
  )
}

export default DashboardLayout
