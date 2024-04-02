import HomeProgram from 'components/home-program';
import { getCachedFeaturedPrograms } from 'lib/shopifyCache';

export default async function Featured() {
  const featuredProgram = await getCachedFeaturedPrograms();

  return (
    <section>
      <div className="mx-auto bg-white  px-6 py-24 sm:py-64 lg:px-20">
        <h2
          style={{ letterSpacing: 0.5 }}
          className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
        >
          Available Programs
        </h2>
        <p className="lg w-full text-xl leading-8 text-gray-600 sm:w-4/5  lg:w-1/2">
          Check out our top fitness programs, tailored to kickstart your journey.
        </p>
        <div className="relative mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {featuredProgram
            ? featuredProgram.map((program) => <HomeProgram featuredProgram={program} />)
            : null}
        </div>
      </div>
    </section>
  );
}
