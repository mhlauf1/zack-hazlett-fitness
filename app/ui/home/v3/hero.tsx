'use client';
import { ButtonBento } from 'components/buttons';
import HeroTestimonials from 'components/hero-testimonials';
import Link from 'next/link';
import ReactPlayer from 'react-player';

export default function Hero() {
  return (
    <section className="relative mx-2 mb-8 mt-[10vh] flex h-auto flex-col items-center rounded-xl border border-neutral-200 bg-gradient-to-b from-[#F9F9F7]  via-[#F5F7F9] to-[#E9EFF9] pt-16 md:mx-4 md:pt-28 lg:mx-6 lg:pb-0 lg:pt-12">
      <div className="mb-12 flex w-full items-center justify-between">
        <div className="flex w-full flex-1 flex-col items-start gap-6 px-2 md:px-8 lg:gap-12">
          <h1>
            Your Fitness Companion. <br />
            <span className="large-blue-text">One Click Away.</span>
          </h1>
          <p className="text-body mb-12  w-full lg:mb-0 lg:w-[54ch] ">
            Join Zack in a fitness journey. Simple, effective, and ready for download—{' '}
            <span className="text-blue-500">your new healthy lifestyle starts now.</span>
          </p>
          <div className="mb-8 hidden gap-4 md:flex">
            <Link href="/programs">
              <ButtonBento dark>Find Your Program</ButtonBento>
            </Link>
            <Link href="/personal-training">
              <ButtonBento>Personal Training</ButtonBento>
            </Link>
          </div>
          <div className="mb-8 flex w-full flex-col gap-4 md:hidden md:w-auto md:flex-row lg:w-auto lg:flex-row">
            <Link href="/programs">
              <ButtonBento full dark>
                Find Your Program
              </ButtonBento>
            </Link>
            <Link href="/personal-training">
              <ButtonBento full>Personal Training</ButtonBento>
            </Link>
          </div>
          <HeroTestimonials />
        </div>
        <div className="hidden w-full items-start rounded-xl lg:flex lg:w-2/6">
          <ReactPlayer
            playing
            loop
            playsinline
            height="75vh"
            style={{ display: 'flex', flex: '1' }}
            muted
            url="./hazlett-main-video.mp4"
          />
        </div>
      </div>
    </section>
  );
}
