'use client'
import React, { ReactNode, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const AosProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out-cubic',
            once: true,
        });
    }, []);
    return <>{children}</>;
}

export default AosProvider