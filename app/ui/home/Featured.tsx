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
        <h2
          style={{ letterSpacing: '-1px', lineHeight: '120%' }}
          className="font-inter mt-2 text-2xl font-bold text-gray-900 sm:text-4xl md:text-xl lg:w-[42ch]"
        >
          Embark on a journey to peak fitness with Zack Hazlett Fitness. From intensive weight
          training to nourishing wellness practices. Find your strength and vitality for everyday
          health.
        </h2>
        <div className="relative mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {featuredProgram
            ? featuredProgram.map((program) => <HomeProgram featuredProgram={program} />)
            : null}
        </div>
      </div>
    </section>
  );
}
