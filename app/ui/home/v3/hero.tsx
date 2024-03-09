import { ButtonBento } from 'components/buttons';
import ProfileImages from 'components/profile-images';

export default function Hero() {
  return (
    <section className="mx-2 mb-8 mt-20 flex h-auto flex-col items-center rounded-xl border border-neutral-200 bg-gradient-to-b  from-[#F9F9F7] via-[#F5F7F9] to-[#E9EFF9] pt-16 md:mx-4 md:pt-24 lg:mx-6 lg:h-[85vh] lg:flex-row lg:pt-0">
      <div className="mb-12 flex w-full flex-1 flex-col items-start gap-6 px-6 md:px-8 lg:mb-0 lg:w-4/6 lg:gap-12 lg:px-12">
        <h1>
          Your Fitness Companion. <br />
          One Click Away.
        </h1>
        <p className="text-body w-full md:w-4/5  lg:w-1/2">
          Join Zack in a fitness journey that&#39;s all about real results. Simple, effective, and
          ready for download— your new healthy lifestyle starts now.
        </p>
        <div className="mb-8 hidden gap-4 md:flex">
          <ButtonBento dark>Find Your Program</ButtonBento>
          <ButtonBento>Personal Training</ButtonBento>
        </div>
        <div className="mb-8 flex w-full flex-col gap-4 md:hidden md:w-auto md:flex-row lg:w-auto lg:flex-row">
          <ButtonBento full dark>
            Find Your Program
          </ButtonBento>
          <ButtonBento full>Personal Training</ButtonBento>
        </div>
        <ProfileImages />
      </div>
      <div className="hidden w-full items-start  md:flex lg:w-auto">
        <video
          className="flex h-[85vh] flex-1 rounded-xl object-cover"
          muted
          controls={false}
          loop
          playsInline
          autoPlay={true}
        >
          <source src="./hazlett-main-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
