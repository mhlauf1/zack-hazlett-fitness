import { BlueButton } from 'components/buttons';
import Image from 'next/image';
import HowItWorks from './how-it-works';

export default function About2() {
  return (
    <section className="flex bg-white pt-12 text-[#232323]">
      <div className="flex w-full flex-col gap-12 lg:flex-row">
        <div className="flex flex-col justify-center gap-4 px-8 py-24 lg:flex-1 lg:gap-8 lg:px-16">
          <div className="mb-12">
            <h2 className="mb-6">Welcome to Zack Hazlett Fitness</h2>
            <p className="text-body w-5/6">
              Dive into a world where dedication meets innovation, and every program is a step
              toward the extraordinary. Here, it's not just about workouts and diets; it's about
              crafting a lifestyle that radiates health and confidence.
            </p>
          </div>
          <HowItWorks />
          <div className="mt-12 w-full">
            <BlueButton href="/programs">Browse Programs</BlueButton>
          </div>
        </div>
        <div className="relative mx-2 flex flex-1 items-center justify-center lg:mx-0 lg:justify-end">
          <Image
            src="/hazlett-hero-2.png"
            width={700}
            height={700}
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
          />
        </div>
      </div>
    </section>
  );
}
