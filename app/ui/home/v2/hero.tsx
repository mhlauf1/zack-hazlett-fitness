'use client';
import Button from 'components/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mb-4 mt-20 flex h-auto w-full flex-col justify-between rounded-md pb-8  sm:my-8  md:my-12 lg:my-24 lg:mt-20 lg:h-auto">
      <div className="mb-24 mt-32 flex h-auto flex-col items-center justify-center">
        <h1 className="mb-8 w-full text-center lg:w-[18ch]">
          High Performance Fitness and Nutrition Programs.
        </h1>
        <p className="mb-12 w-full text-center text-xl text-neutral-600 md:text-xl lg:text-2xl">
          Plan for tomorrow, download courses today
        </p>
        <Button href="/programs">Find Your Program</Button>
      </div>
      <div className="mx-2 grid grid-cols-1 justify-items-center gap-1 lg:grid-cols-3 lg:justify-items-stretch">
        <div className="relative h-[60vh] w-5/6 lg:h-[70vh] lg:w-auto">
          <Image
            src="/hazlett-hero-1.png"
            fill
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
            className="rounded-md"
          />
        </div>
        <div className="relative h-[70vh] w-5/6 lg:h-[90vh] lg:w-auto">
          <Image
            src="/hazlett-hero-2.png"
            fill
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
            className="rounded-md"
          />
        </div>
        <div className="relative h-[50vh] w-5/6 lg:h-[70vh] lg:w-auto">
          <Image
            src="/about-1.png"
            fill
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="flex flex-col justify-between pt-16 md:pt-32 lg:pt-48">
<div className="mt-12 flex flex-col items-center gap-4 lg:mt-8 lg:items-start">
  <ProfileImages />
  <h3 className="capitalize leading-3 text-neutral-800 lg:text-lg">
    Over 50+ Success Stories
  </h3>
</div>
</div> */
}
