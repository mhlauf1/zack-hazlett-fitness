import { About, Featured, Hero, HowItWorks, PersonalTraining, Testimonials } from './ui/home';
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
    <div>
      <Hero />
      <Featured />
      <HowItWorks />
      <About />
      <Testimonials />
      <PersonalTraining />
    </div>
  );
}
