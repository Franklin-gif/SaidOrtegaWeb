import React from 'react';
import { usePerson } from '../context/PersonContext';
import { Navbar, Hero, VisionSection, BioSection, ExperienceSection, CandidacySection, TestimonialsSection, GallerySection, ContactLinks, SocialLinks } from '../components/PersonaComponents';

/**
 * Main LandingPage View
 * This component is the primary entry point for the landing page's UI layout.
 */
const LandingPage = () => {
    const { person, loading } = usePerson();

    if (loading || !person) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--scout-purple)', fontWeight: 'bolder', fontSize: '1.5rem', background: '#f8fafc' }}>
                SCOUTING THE WORLD...
            </div>
        );
    }

    return (
        <main style={{ minHeight: '100vh', overflowY: 'auto' }}>
            <Navbar navData={person.sections.nav} />
            <Hero person={person} />
            <VisionSection visionData={person.sections.vision} />
            <BioSection bioData={person.sections.bio} />
            <ExperienceSection expData={person.sections.experience} />
            <GallerySection galleryData={person.sections.gallery} />
            <TestimonialsSection testData={person.sections.testimonials} />
            <ContactLinks
                contactData={person.sections.contact}
                socialLinks={person.socialLinks}
            />
            <SocialLinks />
        </main>
    );
};

export default LandingPage;
