import AnimateWrapper from 'components/animated/animate-wrapper';
import { Button } from 'components/buttons';

export default function CtaBanner() {
  return (
    <section className="lg:mt-42 mt-32 flex h-auto flex-col items-center bg-white px-4 py-[84px] sm:px-8 md:px-12 lg:px-16">
      <AnimateWrapper>
        <h2 className="mb-2 text-2xl text-gray-900 sm:text-3xl md:text-4xl lg:mb-6 lg:text-5xl">
          Not sure where to begin?
        </h2>
      </AnimateWrapper>
      <AnimateWrapper>
        <p className="mb-10  text-center text-lg text-gray-900">
          Download a free, beginner friendly workout to kickstart your journey
        </p>
      </AnimateWrapper>
      <AnimateWrapper>
        <Button href="/">Let's start today</Button>
      </AnimateWrapper>
    </section>
  );
}
