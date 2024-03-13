import { Suspense } from 'react';
import {
  About,
  Banner,
  FeaturedPrograms,
  Hero,
  HowItWorks,
  PersonalTraining,
  Testimonials
} from './ui/home/v3';

export const runtime = 'edge';

function Loading() {
  return <p>Loading Data...</p>;
}

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
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Banner />
      <About />
      <FeaturedPrograms />
      <HowItWorks />
      <PersonalTraining />
      <Testimonials />
    </>
  );
}
