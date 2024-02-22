import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import {
  About,
  CtaBanner,
  FeaturedPrograms,
  Hero,
  HowItWorks,
  InstagramWidget,
  OurTrainer,
  PersonalTraining,
  Testimonials
} from './ui/home';

export const runtime = 'edge';

export const metadata = {
  description:
    'High-performance ecommerce store by Zack Hazlett. Fitness and Nutrition programs available for purchase.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Hero />
        <About />
        <Suspense>
          <FeaturedPrograms />
        </Suspense>
        <HowItWorks />
        <OurTrainer />
        <CtaBanner />
        <Testimonials />
        <InstagramWidget />
        <PersonalTraining />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
