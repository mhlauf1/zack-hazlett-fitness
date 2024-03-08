'use client';
import { BlueButton } from 'components/buttons';

export default function Hero2() {
  return (
    <section className="my-24 flex h-auto w-full flex-col justify-between md:px-16 lg:flex-row">
      <div className="mt-16 flex flex-1 flex-col lg:mt-32">
        <p className="sub-hero-text mb-6 w-full text-center  lg:mb-12 lg:text-start">
          Transform Your Body - Elevate Your Health
        </p>
        <h1 className="mb-12 w-full text-center lg:text-start">
          High Performance{' '}
          <span className="block text-neutral-600">Fitness and Nutrition Programs.</span>
        </h1>
        <div className="w-full lg:w-1/2">
          <BlueButton href="/programs">Find Your Program</BlueButton>
        </div>
      </div>
      <div className="mt-12 flex flex-1 justify-center lg:mt-0">
        <div className="relative h-[70vh] w-full lg:h-[90vh] lg:w-auto">
          <video height={800} width={475} muted controls={false} loop playsInline autoPlay={true}>
            <source src="./hazlett-main-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
