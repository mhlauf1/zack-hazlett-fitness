import { BlueButton } from 'components/buttons';
import FeaturedPrograms from 'components/featured-program';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';

export default async function FeaturedPrograms2() {
  const featuredPrograms = await getCollectionProducts({ collection: FEATURED_PROGRAMS });

  return (
    <section className="md:pb-42 flex h-auto flex-col bg-white px-4 pb-32 pt-16 sm:px-8 md:px-12 md:pt-24 lg:px-16 lg:pb-32 lg:pt-32">
      <div className="relative mb-8">
        <div className="top-[8vh] z-10 mb-8 flex flex-wrap items-center justify-between gap-2 bg-white py-4 md:gap-4 lg:sticky lg:mb-16 lg:flex-row lg:gap-0">
          <h3>Featured Programs</h3>
          <div className="mt-2 hidden w-full sm:w-1/2 md:mt-0 lg:block lg:w-1/4">
            <BlueButton href="/programs">All Programs</BlueButton>
          </div>
        </div>
        {featuredPrograms.length === 0 ? null : <FeaturedPrograms programs={featuredPrograms} />}
      </div>
      <div className="block lg:hidden">
        <BlueButton href="/programs"> Browse All Programs</BlueButton>
      </div>
    </section>
  );
}
