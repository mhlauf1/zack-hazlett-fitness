'use client';
import { BlueButton } from 'components/buttons';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mb-4 mt-20 flex h-auto w-full flex-col justify-between rounded-md   pb-8 sm:my-8  md:my-12  lg:my-24 lg:mt-20">
      <div className="mb-24 mt-16 flex h-auto flex-col items-center justify-center px-4 lg:mt-24 lg:px-20">
        <p className="sub-hero-text mb-8 w-full text-center">
          Transform Your Body - Elevate Your Health
        </p>
        <h1 className="mb-12 w-full text-center">
          High Performance{' '}
          <span className="block text-neutral-600">Fitness and Nutrition Programs.</span>
        </h1>

        <div className="w-full lg:w-1/4">
          <BlueButton href="/programs">Find Your Program</BlueButton>
        </div>
      </div>
      <div className="mx-2 grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3 lg:justify-items-stretch lg:gap-2">
        <div className="relative hidden h-[60vh] w-full lg:block lg:h-[80vh] lg:w-auto">
          <Image
            src="/hazlett-hero-1.png"
            fill
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
          />
        </div>
        <div className="relative hidden h-[60vh] w-full lg:block lg:h-[80vh] lg:w-auto">
          <Image
            src="/hazlett-hero-2.png"
            fill
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
          />
        </div>
        <div className="relative hidden h-[60vh] w-full lg:block lg:h-[80vh]  lg:w-auto">
          <Image
            src="/about-1.png"
            fill
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
          />
        </div>
      </div>
    </section>
  );
}
