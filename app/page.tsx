import React from 'react'
import Navbar from '@/components/common/Navbar'
import HeroSection from '@/components/landing/HeroSection'
import Footer from '@/components/common/Footer'

const LandingPage = () => {
  return (
    <>
      <main className='flex flex-col justify-center items-center w-full'>
        <Navbar />
        <HeroSection />
        <Footer />
      </main>
    </>
  )
}

export default LandingPage