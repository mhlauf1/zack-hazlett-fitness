import Divider from 'components/Divider';
import { Button } from 'components/buttons';
import FeaturedProgramList from 'components/layout/featured/featured-program-list';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';

export default async function FeaturedPrograms() {
  const featuredPrograms = await getCollectionProducts({ collection: FEATURED_PROGRAMS });

  return (
    <section className="flex h-auto flex-col px-4 pt-24 sm:px-8 md:px-12 md:pt-48 lg:px-16 lg:pt-72">
      <Divider color="bg-neutral-300" />
      <div className="relative mb-8">
        <div className="sticky top-[8vh] z-10 mb-8 flex flex-wrap items-center justify-between gap-2 bg-neutral-100 py-4 md:gap-4 lg:mb-24 lg:flex-row lg:gap-0">
          <h3>Featured Programs</h3>
          <Button href="/programs">All Programs</Button>
        </div>
        {featuredPrograms.length === 0 ? null : <FeaturedProgramList programs={featuredPrograms} />}
      </div>
      <Divider color="bg-neutral-300" />
    </section>
  );
}
