import {
  About,
  Banner,
  Featured,
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
      <Hero />
      <Featured />
      <Banner />
      <HowItWorks />
      <FeaturedPrograms />
      <About />
      <PersonalTraining />
      <Testimonials />
    </>
  );
}
