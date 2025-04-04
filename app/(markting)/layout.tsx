import React from 'react'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

const MarkingLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
      <div className='h-full bg-slate-100'>
        {/* Navbar */}
        <Navbar />
        <main className='pt-40 pb-20 bg-slate-100'>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default MarkingLayout
