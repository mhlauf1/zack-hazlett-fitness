import { ButtonBento } from 'components/buttons';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './section-header';

export default async function FeaturedPrograms() {
  const featuredPrograms = await getCollectionProducts({ collection: FEATURED_PROGRAMS });
  return (
    <section className="mx-0 mb-16 mt-16 flex h-auto  flex-col  items-center rounded-xl  bg-[#f3f1ed] px-4 pb-8 pt-20 md:mt-0 md:pb-8 md:pt-24  lg:mb-20 lg:px-8 lg:pb-12 lg:pt-32">
      <SectionHeader text="Featured Programs" />
      <h2 className="mt-8 text-center  lg:mt-12">
        Precision-Crafted Programs: <br />{' '}
        <span className="text-2xl text-neutral-500 lg:text-4xl">Your Blueprint for Healt1h</span>{' '}
      </h2>
      <p className="text-body mb-16 mt-8 w-11/12 text-center md:w-3/4 lg:w-5/12">
        Browse esour programs: From dynamic workouts to calming mindfulness, experience well-rounded
        health at its best.{' '}
        <Link href="/programs" className="font-bold text-[#232323]">
          View all programs here.
        </Link>
      </p>
      <div className="mb-16 w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {featuredPrograms.length === 0
            ? null
            : featuredPrograms.map((program) => (
                <div className="flex h-auto w-full flex-1 flex-col items-start justify-between rounded-xl border  bg-white pb-4 drop-shadow-md duration-300 hover:opacity-90 hover:drop-shadow-xl ">
                  <Link href={`/program/${program.handle}`} className="w-full">
                    <div className="relative flex h-[250px] w-full flex-col items-center lg:h-[300px] ">
                      <Image
                        src={program.featuredImage?.url}
                        objectFit="cover"
                        alt={program.title}
                        fill
                        className="flex flex-1 rounded-t-xl"
                      />
                    </div>
                    <div className="mt-6 flex  w-full items-start justify-between px-6">
                      <div className="flex w-full flex-col justify-between gap-1">
                        <span className="text-body-small font-nohemi font-light uppercase">
                          {program.tags}
                        </span>
                        <h3 className="font-inter text-xl font-medium">{program.title}</h3>
                      </div>
                      <Price
                        amount={program.priceRange.maxVariantPrice.amount}
                        currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                        className="text-body-small"
                      />
                    </div>
                    <div className="mt-1 px-6 ">
                      <ul className="mb-6 grid grid-cols-1 gap-2">
                        {program.metafields?.map((metafield: { value: any }) => {
                          const cardDescription = metafield.value;
                          return (
                            <li
                              style={{ fontSize: '1rem' }}
                              className="text-body"
                              key={cardDescription}
                            >
                              {cardDescription}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Link>
                  <div className="w-full px-6">
                    <div className="z-20 flex w-full flex-col gap-4">
                      <AddToCart
                        large
                        variants={program.variants}
                        availableForSale={program.availableForSale}
                      />
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <Link href="/programs">
        <ButtonBento> Browse All Programs</ButtonBento>
      </Link>
    </section>
  );
}
