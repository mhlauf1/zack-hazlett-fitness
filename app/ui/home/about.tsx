import SectionLabel from 'components/section-label';

export default function About() {
  return (
    <section className="flex h-auto flex-col px-4 pt-32 sm:px-8 md:px-12 md:pt-48  lg:flex-row lg:px-16 lg:pt-72">
      <div className="flex w-full flex-col justify-between gap-2 lg:w-4/12 lg:gap-0">
        <SectionLabel text="About" />
        <h3 className="w-full text-lg text-neutral-600 md:text-xl lg:w-2/3 lg:text-2xl">
          5+ Years of Professional Fitness Experience
        </h3>
      </div>
      <div className="ml-0 mt-8 flex w-full flex-col gap-8 lg:ml-48 lg:mt-0 lg:w-7/12 lg:gap-16">
        <p className="text-lg leading-relaxed text-neutral-600 md:text-xl lg:text-2xl">
          Unlock your fitness potential with Zack's expertly designed courses, available for
          immediate download. Each program is crafted from his wealth of knowledge as a seasoned
          personal trainer, offering you the blueprint to achieve your health and fitness goals from
          the comfort of your home.
        </p>
        <p className="text-lg leading-relaxed text-neutral-600 md:text-xl lg:text-2xl">
          For those seeking a more personalized touch, Zack offers the opportunity to work directly
          with him. With one-on-one sessions, you'll benefit from his extensive experience and
          achievements in fitness, receiving tailored guidance that's as unique as your individual
          health journey.
        </p>
      </div>
    </section>
  );
}
