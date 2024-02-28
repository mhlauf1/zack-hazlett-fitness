'use client';
import { BlueButton } from 'components/buttons';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mb-4 mt-20 flex h-auto w-full flex-col justify-between rounded-md pb-8  sm:my-8  md:my-12 lg:my-24 lg:mt-20 lg:h-auto">
      <div className="mb-24 mt-32 flex h-auto flex-col items-center justify-center px-4 lg:px-0">
        <h1 className="mb-8 w-full text-center lg:w-[18ch]">
          High Performance Fitness and Nutrition Programs.
        </h1>
        <p className="sub-hero-text mb-12 w-full text-center">
          Plan for tomorrow - download courses today
        </p>
        <div className="w-full lg:w-1/4">
          <BlueButton href="/programs">Find Your Program</BlueButton>
        </div>
      </div>
      <div className="mx-2 grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3 lg:justify-items-stretch lg:gap-1">
        <div className="relative h-[60vh] w-full lg:h-[70vh] lg:w-auto">
          <Image
            src="/hazlett-hero-1.png"
            fill
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
          />
        </div>
        <div className="relative h-[70vh] w-full lg:h-[90vh] lg:w-auto">
          <Image
            src="/hazlett-hero-2.png"
            fill
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
          />
        </div>
        <div className="relative hidden h-[50vh] w-full lg:block lg:h-[70vh] lg:w-auto">
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
