import { getHeroSection } from 'lib/contentful';
import Image from 'next/image';
import HeroButton from './hero-button';

export default async function Hero() {
  const heroSection = await getHeroSection();

  if (!heroSection) {
    return <div>No hero section data available here</div>;
  }

  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto items-center justify-between gap-4 px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-32">
        <div className="mx-auto flex flex-1 flex-col md:pl-4">
          <div>
            <div className="mt-16 md:mt-0">
              <span className="font-inter rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                Personal Training Coming Soon
              </span>
            </div>
            <h1 className="font-nohemi mt-10 text-4xl font-semibold capitalize tracking-tight text-gray-900 md:w-[20ch] md:text-5xl lg:text-6xl">
              {heroSection.heading}
            </h1>
            <p className="lg mt-6 w-full text-xl leading-8 text-gray-600 sm:w-4/5  lg:w-2/3">
              {heroSection.subHeading}
            </p>
          </div>
          <HeroButton text={heroSection.actionButtonText} />
        </div>
        <div className="mt-12  flex max-w-3xl flex-1 sm:max-w-5xl md:p-4 lg:mt-0 lg:h-[75vh] ">
          <Image
            src={heroSection.image.url}
            alt="Zack Hazlett Fitness"
            width={500}
            height={700}
            className="w-full rounded-xl object-cover shadow-2xl ring-1 ring-gray-900/10 "
          />
        </div>
      </div>
    </div>
  );
}
