"use client"
import React from 'react'
import MessageInput from '../common/MessageInput'

const HeroSection = () => {
    return (
        <section className='flex justify-center items-center w-full min-h-screen border-b border-border px-2'>
            <div className='w-full max-w-7xl min-h-screen flex justify-center items-center gap-10 border-x border-border py-20'>
                <div className='flex flex-col justify-center items-center gap-5 max-w-2xl w-full text-center'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <img src="/halo.svg" alt="" className='h-30 w-30 dark:invert' draggable="false" />
                        <h1 className='text-4xl lg:text-6xl font-bold bg-gradient-to-br from-muted to-secondary bg-clip-text text-transparent'>
                            Build with Halo
                        </h1>
                    </div>
                    <p className='text-muted text-sm lg:text-base'>
                        The simplest way to turn ideas into working projects.
                    </p>
                    <div className='w-full flex justify-center px-2'>
                        <MessageInput placeholder='What do you want to build?' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection