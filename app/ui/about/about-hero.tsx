'use client';
import ReactPlayer from 'react-player';

type Props = {};

const AboutHero = (props: Props) => {
  return (
    <div className="bg-blue-500">
      <div className="relative isolate pt-8">
        <svg
          className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] md:block"
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
        <div className="relative flex h-auto flex-col gap-y-16 pb-24 pt-32 md:flex-row md:items-center md:py-24">
          <div className="flex w-full flex-col items-start px-4 sm:px-6 md:w-7/12 lg:px-20">
            <p className="font-inter rounded-full bg-white/10 px-4 py-2 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-gray-200">
              Fitness & Health Professional
            </p>
            <h1 className="mb-4 mt-10 w-full text-3xl font-semibold tracking-tight text-white md:text-5xl  lg:text-6xl">
              Unlock Your Full Potential with Zack Hazlett Fitness
            </h1>
            <div className="flex w-10/12 flex-col">
              <p className="mt-2 text-lg  text-gray-100">
                Dedicated to transforming lives through personalized fitness and nutrition programs.
                I believe in fitness as a lifestyle, not a quick fix.
              </p>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="flex w-full items-start rounded-xl md:mt-8">
              <ReactPlayer
                playing
                loop
                playsinline
                height="70vh"
                style={{ display: 'flex', flex: '1' }}
                muted
                url="./hazlett-main-video.mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
