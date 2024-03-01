import { ThreeItemGrid } from 'components/grid/three-items';
import { Suspense } from 'react';
import {
  About,
  FeaturedPrograms,
  Hero,
  HowItWorks,
  PersonalTraining,
  Testimonials
} from './ui/home/v2';

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
        <Suspense>
          <FeaturedPrograms />
        </Suspense>
        <About />
        <HowItWorks />
        <PersonalTraining />
        <Testimonials />
      </Suspense>
    </>
  );
}
