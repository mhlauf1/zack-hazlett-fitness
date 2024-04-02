'use client';
import { Btn } from 'components/buttons';
import ReactPlayer from 'react-player';

export default function PersonalTraining() {
  return (
    <div className="bg-blue-700">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            style={{ letterSpacing: 0.5 }}
            className="text-lg font-semibold leading-8 tracking-tight text-gray-100"
          >
            Join The Community
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  text-blue-50 md:text-5xl lg:text-6xl">
            Interested In One On One Personal Training?
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Btn white href="/personal-training">
              Learn More
            </Btn>
          </div>
          <div className="mt-8 hidden w-full items-start rounded-xl lg:flex">
            <ReactPlayer
              playing
              loop
              playsinline
              height="50vh"
              style={{ display: 'flex', flex: '1' }}
              muted
              url="./hazlett-main-video.mp4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
