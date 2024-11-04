import { CtaSection } from '@/components/sections/cta-section'
import { ServicesHeroSection } from '@/components/sections/services-hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import React from 'react'

const ServicesPage = () => {
    return (
        <>
            <ServicesHeroSection />
            <ServicesSection />
            <CtaSection />
        </>
    )
}

export default ServicesPage