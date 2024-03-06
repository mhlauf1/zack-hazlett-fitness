import Footer from 'components/layout/footer';
import { About2, FeaturedPrograms2, Hero, PersonalTraining, Testimonials } from './ui/home/v2';

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
      <About2 />
      <FeaturedPrograms2 />
      <PersonalTraining />
      <Testimonials />
      <Footer />
    </>
  );
}
