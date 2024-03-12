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
        <span className="text-2xl text-neutral-500 lg:text-4xl">Your Blueprint for Health</span>{' '}
      </h2>
      <p className="text-body mb-16 mt-8 w-11/12 text-center md:w-3/4 lg:w-5/12">
        Browse our programs: From dynamic workouts to calming mindfulness, experience well-rounded
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
                <div className="flex flex-1 flex-col flex-wrap justify-between gap-2 rounded-xl border border-neutral-400 bg-white px-6 pb-4 pt-12 duration-300 hover:opacity-90 lg:px-6 lg:pt-16">
                  <div className="flex flex-1 flex-col items-start justify-between lg:py-4">
                    <div className="w-full">
                      <div className="flex w-full flex-col items-center gap-6">
                        <Image
                          src={program.featuredImage?.url}
                          objectFit="cover"
                          alt={program.title}
                          height={175}
                          width={175}
                          className="flex h-[150px] w-[150px] rounded-xl md:h-[200px] md:w-[200px]"
                        />
                      </div>
                      <div className="mb-2 mt-16 flex w-full items-start justify-between lg:mb-8">
                        <div className="flex w-full flex-col justify-between gap-2">
                          <span className="text-body-small font-nohemi font-light uppercase">
                            {program.tags}
                          </span>
                          <h3 className="text-2xl">{program.title}</h3>
                        </div>
                        <Price
                          amount={program.priceRange.maxVariantPrice.amount}
                          currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                          className="text-body"
                        />
                      </div>
                      <div>
                        <p className="mb-4">What&#39;s Included:</p>
                        <ul className="mb-6 grid grid-cols-1 gap-4 gap-x-8 md:grid-cols-2">
                          {program.metafields?.map((metafield: { value: any }) => {
                            const includedItems = JSON.parse(metafield.value).included;
                            return includedItems.map((item: string) => (
                              <li key={item} className="flex items-start gap-2">
                                <div
                                  style={{ marginTop: 6 }}
                                  className="h-1 w-1 rounded-full bg-neutral-300"
                                />
                                <p style={{ fontSize: '1rem' }} className="text-body">
                                  {item}
                                </p>
                              </li>
                            ));
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 w-full lg:mt-10">
                      <div className="flex w-full flex-col gap-4">
                        <AddToCart
                          variants={program.variants}
                          availableForSale={program.availableForSale}
                        />
                        <Link href={`/program/${program.handle}`}>
                          <ButtonBento full dark>
                            View all Details
                          </ButtonBento>
                        </Link>
                      </div>
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
