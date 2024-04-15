import { About, ComingSoon, Featured, Hero, HowItWorks, Testimonials } from './ui/home';
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
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
      <HowItWorks />
      <About />
      <Testimonials />
      {/* <PersonalTraining /> */}
      <ComingSoon />
    </>
  );
}
