import { BlueButton } from 'components/buttons';
import HowItWorks from '../how-it-works';

export default function About2() {
  return (
    <section className="flex border-y border-neutral-200 bg-white text-[#232323]">
      <div className="flex w-full flex-col gap-12 px-8 lg:flex-row lg:px-20 ">
        <div className="flex flex-col justify-center gap-4 lg:flex-1 lg:gap-8">
          <div className="my-12">
            <h2 className="mb-6">Welcome to Zack Hazlett Fitness</h2>
            <p className="text-body w-5/6">
              Dive into a world where dedication meets innovation, and every program is a step
              toward reaching your health goals. Here, it's not just about workouts and diets; it's
              about crafting a lifestyle that radiates health and confidence.
            </p>
          </div>
          <HowItWorks />
          <div className="my-12 w-full">
            <BlueButton href="/programs">Browse Programs</BlueButton>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center lg:mx-0 lg:justify-end">
          <div className="relative  w-full justify-end lg:flex  lg:w-auto">
            <video height="240" width={400} muted controls={false} loop playsInline autoPlay={true}>
              <source src="./hazlett-main-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
