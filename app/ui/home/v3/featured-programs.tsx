import { ButtonBento } from 'components/buttons';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import Featured from './Featured';
import SectionHeader from './section-header';

export default async function FeaturedPrograms() {
  const featuredPrograms = await getCollectionProducts({ collection: FEATURED_PROGRAMS });

  return (
    <section className="mx-0 mb-8 mt-16 flex h-auto  flex-col  items-center rounded-xl  bg-[#f3f1ed] px-4 pb-8 pt-20 md:mt-0 md:pb-8 md:pt-24  lg:mb-20 lg:px-8 lg:pb-12 lg:pt-32">
      <SectionHeader text="Featured" />
      <h2 className="mt-8 text-center  lg:mt-12">
        Precision-Crafted Programs: <br />{' '}
        <span className="text-xl text-neutral-500 lg:text-4xl">Your Blueprint for Health</span>{' '}
      </h2>
      <p className="text-body mb-16 mt-4 w-11/12 text-center md:w-3/4 lg:mt-8 lg:w-5/12">
        Browse our programs: From dynamic workouts to calming mindfulness, experience well-rounded
        health at its best.{' '}
        <Link href="/programs" className="font-bold text-[#232323]">
          View all programs here.
        </Link>
      </p>
      <div className="mb-12 w-full">
        {featuredPrograms.length === 0 ? null : <Featured programs={featuredPrograms} />}
      </div>
      <Link href="/programs">
        <ButtonBento> Browse All Programs</ButtonBento>
      </Link>
    </section>
  );
}
