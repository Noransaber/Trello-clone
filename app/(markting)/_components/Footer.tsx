import { Button } from '@/components/ui/button'
import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className='w-full  p-4 border-t fixed bottom-0 bg-slate-100 '>
            <div className="w-full flex items-center justify-between md:max-w-screen-2xl mx-auto">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm"  variant='ghost'>
                        Privacy Policy
                    </Button>
  
                    <Button size="sm"  variant='ghost'>
                        Terms of services
                    </Button>
                </div>
            </div>
      </div>
    )
}

export default Footer
