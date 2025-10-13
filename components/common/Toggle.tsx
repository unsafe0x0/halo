"use client"
import React, { useState, useEffect } from 'react'
import { RiFlashlightFill } from "react-icons/ri";
import { RiFlashlightLine } from "react-icons/ri";
import { useTheme } from 'next-themes'

const Toggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='bg-card p-2 border border-border'>
            {theme === 'light' ? <RiFlashlightFill size={24} /> : <RiFlashlightLine size={24} />}
        </button>
    )
}

export default Toggle