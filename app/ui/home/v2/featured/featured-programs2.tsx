import { BlueButton } from 'components/buttons';
import FeaturedPrograms from 'components/featured-program';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';

export default async function FeaturedPrograms2() {
  const featuredPrograms = await getCollectionProducts({ collection: FEATURED_PROGRAMS });

  return (
    <section className="md:pb-42 flex h-auto flex-col items-center bg-white pb-32 pt-24  md:pt-36 lg:pb-32 lg:pt-36">
      <div className="relative mb-12">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-4  sm:px-8  md:gap-4 md:px-12 lg:sticky lg:flex-row lg:gap-0 lg:px-16">
          <h3>Featured Program</h3>
          <div className="mt-2 hidden w-full sm:w-1/2 md:mt-0 lg:block lg:w-1/4">
            <BlueButton href="/programs">All Programs</BlueButton>
          </div>
        </div>
        {featuredPrograms.length === 0 ? null : <FeaturedPrograms programs={featuredPrograms} />}
      </div>
      <BlueButton href="/programs"> Browse All Programs</BlueButton>
    </section>
  );
}
