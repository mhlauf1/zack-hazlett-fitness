import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AllProductsList } from 'app/ui/programs/all-products-list';
import { defaultSort, sorting } from 'lib/constants';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const programs = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <section>
      {programs.length === 0 ? (
        <p className="py-3 text-lg">{`No programs found in this collection`}</p>
      ) : (
        <div className="mb-16 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-y-8 lg:px-8">
          <AllProductsList programs={programs} />
        </div>
      )}
    </section>
  );
}
