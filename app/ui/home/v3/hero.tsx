import { ButtonBento } from 'components/buttons';
import HeroTestimonials from 'components/hero-testimonials';
import Link from 'next/link';
import Featured from './Featured';
export default async function Hero() {
  return (
    <section className="relative mx-2 mb-8 mt-[10vh] flex h-auto flex-col items-center rounded-xl border border-neutral-200 bg-gradient-to-b from-[#F9F9F7] via-[#F5F7F9]  to-[#E9EFF9] pb-8 pt-16 md:mx-4 md:pt-28 lg:mx-6 lg:pb-0 lg:pt-8">
      <div className="mb-12  flex w-full flex-1 flex-col items-center gap-6 px-2 md:px-8 lg:gap-12  lg:px-12 lg:py-24">
        <h1 className="text-center">
          Your Fitness Companion. <br />
          <span className="large-blue-text">One Click Away.</span>
        </h1>
        <p className="text-body mb-12 w-full text-center md:w-4/5 lg:mb-0 ">
          Join Zack in a fitness journey. Simple, effective, and ready for download— your new
          healthy lifestyle
          <span className="text-blue-500"> starts now.</span>
        </p>
        <div className="mb-8 hidden gap-4 md:flex">
          <Link href="/programs">
            <ButtonBento dark>Find Your Program</ButtonBento>
          </Link>
          <Link href="/personal-training">
            <ButtonBento>Personal Training</ButtonBento>
          </Link>
        </div>
        <div className="mb-8 flex w-full flex-col gap-4 md:hidden md:w-auto md:flex-row lg:w-auto lg:flex-row">
          <Link href="/programs">
            <ButtonBento full dark>
              Find Your Program
            </ButtonBento>
          </Link>
          <Link href="/personal-training">
            <ButtonBento full>Personal Training</ButtonBento>
          </Link>
        </div>
        <HeroTestimonials />
      </div>
      <Featured />
    </section>
  );
}
