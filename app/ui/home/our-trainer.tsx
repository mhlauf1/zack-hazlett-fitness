import Button from 'components/button';
import SectionLabel from 'components/section-label';
import Image from 'next/image';

export default function OurTrainer() {
  return (
    <section className="flex h-auto flex-col gap-4 px-4 pt-32 sm:px-8 md:px-12 md:pt-48  lg:px-16 lg:pt-72">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-0">
        <SectionLabel text="Our Trainer" />
        <div className="hidden lg:block">
          <Button href="/about">Learn about Zack</Button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 md:flex-row lg:gap-4">
        <div className="relative flex">
          <Image
            src="/about-1.png"
            width={650}
            height={500}
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
            className="rounded-md"
          />
        </div>
        <div className="relative flex">
          <Image
            src="/hazlett-hero-1.png"
            width={550}
            height={500}
            objectFit="cover"
            alt="Hero image for Zack Hazlett Fitiness website"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="mt-10 block lg:hidden">
        <Button href="/about">Learn about Zack</Button>
      </div>
    </section>
  );
}
