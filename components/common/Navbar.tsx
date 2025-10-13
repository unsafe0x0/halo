import React from 'react'
import Button from './Button'
import Toggle from './Toggle'

const Navbar = () => {
    return (
        <nav className='flex justify-center items-center border-b border-border w-full fixed top-0 z-50 backdrop-blur-xs px-2'>
            <div className='flex justify-between items-center w-full max-w-7xl border-x border-border px-2 py-2'>
                <div className='flex items-center gap-1'>
                    <img src="/halo.svg" alt="" className='h-10 w-10 dark:invert' draggable="false" />
                    <h2 className='text-2xl font-semibold text-secondary'>
                        Halo
                    </h2>
                </div>
                <div className='flex items-center gap-2'>
                    <Toggle />
                    <Button>Sign In</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar