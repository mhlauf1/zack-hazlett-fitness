import Button from 'components/button';
import ProfileImages from 'components/profile-images';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mx-4 my-4 flex h-auto flex-col justify-between rounded-md bg-neutral-200 px-12 pb-16 sm:mx-8 sm:my-8 md:mx-12 md:my-12 lg:mx-6 lg:my-24 lg:h-auto lg:flex-row">
      <div className="flex flex-col justify-between pt-32 lg:pt-48">
        <div className="flex flex-col items-start">
          <h1 className="mb-6 w-full text-center text-3xl font-medium text-neutral-800 sm:text-4xl md:text-5xl lg:w-5/6 lg:text-start lg:text-7xl">
            High Performance Fitness and Nutrition Programs.
          </h1>
          <h4 className="mb-14  w-full text-center text-xl text-neutral-600 lg:w-2/3 lg:text-start lg:text-2xl">
            Downloadable fitness & nutrition programs from Zack Hazlett
          </h4>
          <Button href="/programs">Find A Program For You</Button>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 lg:mt-0 lg:items-start">
          <ProfileImages />
          <h3 className="capitalize leading-3 text-neutral-800 lg:text-lg">
            Over 50+ Success Stories
          </h3>
        </div>
      </div>
      <div className="relative mt-16 flex lg:mt-24">
        <Image
          src="/hazlett-hero-2.png"
          width={825}
          height={500}
          objectFit="cover"
          alt="Hero image for Zack Hazlett Fitiness website"
          className=" rounded-md"
        />
      </div>
    </section>
  );
}
