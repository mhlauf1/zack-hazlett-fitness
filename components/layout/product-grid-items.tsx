'use client';
import AnimateWrapper from 'components/animated/animate-wrapper';
import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <AnimateWrapper>
          <Grid.Item key={product.handle} className="animate-fadeIn">
            <Link
              className="relative inline-block h-full w-full"
              href={`/product/${product.handle}`}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                tags={product.tags}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="flex items-center justify-between text-[#232323]">
                <h1>{product.title}</h1>
                <p>{product.priceRange.maxVariantPrice.amount}</p>
              </div>
            </Link>
          </Grid.Item>
        </AnimateWrapper>
      ))}
    </>
  );
}
