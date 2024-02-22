import Button from 'components/button';
import ProfileImages from 'components/profile-images';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex h-auto flex-col justify-between px-4 sm:px-8 md:px-12 lg:h-[100vh] lg:flex-row lg:px-16">
      <div className="flex flex-col justify-between pb-16 pt-48 lg:pt-64">
        <div className="flex flex-col items-start">
          <h1 className="mb-6 w-full text-center text-3xl font-medium sm:text-4xl md:text-5xl lg:w-5/6 lg:text-start lg:text-7xl">
            High Performance Fitness and Nutrition Programs.
          </h1>
          <h4 className="mb-14 w-full text-center text-xl text-gray-300 lg:w-2/3 lg:text-start lg:text-2xl">
            Downloadable fitness & nutrition programs <br /> from Zack Hazlett
          </h4>
          <Button href="/programs">Find A Program For You</Button>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 lg:mt-0 lg:items-start">
          <ProfileImages />
          <h3 className="capitalize leading-3  lg:text-lg">Over 50+ Success Stories</h3>
        </div>
      </div>
      <div className="relative mt-0 flex lg:mt-24">
        <Image
          src="/hazlett-hero-2.png"
          width={825}
          height={500}
          objectFit="cover"
          alt="Hero image for Zack Hazlett Fitiness website"
          className="mb-16 rounded-md"
        />
      </div>
    </section>
  );
}
