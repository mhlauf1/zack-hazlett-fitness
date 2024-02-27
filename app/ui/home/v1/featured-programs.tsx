import Divider from 'components/Divider';
import AnimateWrapper from 'components/animated/animate-wrapper';
import { Button } from 'components/buttons';
import FeaturedProgramList from 'components/layout/featured/featured-program-list';
import SectionLabel from 'components/section-label';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';

export default async function FeaturedPrograms() {
  const featuredPrograms = await getCollectionProducts({ collection: FEATURED_PROGRAMS });

  return (
    <section className="flex h-auto flex-col px-4 pt-24 sm:px-8 md:px-12 md:pt-48 lg:px-16 lg:pt-72">
      <Divider color="bg-neutral-300" />
      <div className="mb-8">
        <AnimateWrapper>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:mb-24 lg:flex-row lg:items-center lg:gap-0">
            <SectionLabel text="Featured Programs" />
            <div className="hidden lg:block">
              <Button href="/programs">Explore All Programs</Button>
            </div>
          </div>
        </AnimateWrapper>
        {featuredPrograms.length === 0 ? null : <FeaturedProgramList programs={featuredPrograms} />}
        <AnimateWrapper>
          <div className="mt-10 block lg:hidden">
            <Button href="/programs">Explore All Programs</Button>
          </div>
        </AnimateWrapper>
      </div>
      <Divider color="bg-neutral-300" />
    </section>
  );
}
