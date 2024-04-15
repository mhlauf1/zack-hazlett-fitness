'use client';
import AboutHero from 'app/ui/about/about-hero';
import Info from 'app/ui/about/info';

export const runtime = 'edge';

const About = () => {
  return (
    <section>
      <AboutHero />
      <Info />
    </section>
  );
};

export default About;
