import Button from 'components/button';
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import SectionLabel from 'components/section-label';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';

export default async function FeaturedPrograms() {
  const featuredPrograms = await getCollectionProducts({ collection: FEATURED_PROGRAMS });

  return (
    <section className="flex h-auto flex-col px-4 pt-48 sm:px-8 md:px-12 lg:px-16 lg:pt-72">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-0">
        <SectionLabel text="Featured Programs" />
        <Button href="/programs">Explore All Programs</Button>
      </div>
      {featuredPrograms.length === 0 ? null : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={featuredPrograms} />
        </Grid>
      )}
    </section>
  );
}
