import Footer from 'components/layout/footer';
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
      <Banner />
      <About />
      <FeaturedPrograms />
      <HowItWorks />
      <PersonalTraining />
      <Testimonials />
      <Footer />
    </>
  );
}
