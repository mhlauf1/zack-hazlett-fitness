import { ButtonBento } from 'components/buttons';
import { AddToCart } from 'components/cart/add-to-cart';
import HeroTestimonials from 'components/hero-testimonials';
import Price from 'components/price';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export default async function Hero() {
  const featuredPrograms = await getCollectionProducts({ collection: FEATURED_PROGRAMS });
  let program = featuredPrograms[0];

  return program ? (
    <section className="mx-2 mb-8 mt-20 flex h-auto flex-col items-center rounded-xl border border-neutral-200 bg-gradient-to-b from-[#F9F9F7] via-[#F5F7F9]  to-[#E9EFF9] pb-8 pt-16 md:mx-4 md:pt-28 lg:mx-6 lg:flex-row lg:pb-0 lg:pt-4">
      <div className="mb-12 flex w-full flex-1 flex-col items-center gap-6 px-6 md:px-8 lg:gap-12  lg:px-12 lg:py-24">
        <h1 className="text-center">
          Your Fitness Companion. <br />
          <span className="large-blue-text">One Click Away.</span>
        </h1>
        <p className="text-body w-full text-center md:w-4/5 ">
          Join Zack in a fitness journey. Simple, effective, and{' '}
          <span className="text-blue-500">ready for download—</span> <br /> your new healthy
          lifestyle <span className="text-blue-500">starts now.</span>
        </p>
        <div className="mb-8 hidden gap-4 md:flex">
          <Link href="/programs">
            <ButtonBento dark>Find Your Program</ButtonBento>
          </Link>
          <Link href="/personal-training">
            <ButtonBento>Personal Training</ButtonBento>
          </Link>
        </div>
        <div className="mb-8 flex w-full flex-col gap-4 md:hidden md:w-auto md:flex-row lg:w-auto lg:flex-row">
          <Link href="/programs">
            <ButtonBento full dark>
              Find Your Program
            </ButtonBento>
          </Link>
          <Link href="/personal-training">
            <ButtonBento full>Personal Training</ButtonBento>
          </Link>
        </div>
        <HeroTestimonials />
        <div className="mt-8 flex w-full flex-col gap-4 lg:flex-row">
          <div className="relative hidden rounded-xl border border-neutral-200 lg:flex lg:w-7/12">
            <Image
              className="rounded-xl"
              src="/zh-asset.webp"
              objectFit="cover"
              alt="Zack Hazlett Fitenss"
              fill
            />
          </div>
          <div className="relative flex rounded-xl border border-neutral-200 lg:hidden lg:w-1/2 lg:flex-1">
            <Image
              className="flex flex-1 rounded-xl"
              src="/zh-asset.webp"
              objectFit="cover"
              alt="Zack Hazlett Fitenss"
              width={300}
              height={600}
            />
          </div>
          <div className="flex h-auto w-full flex-col items-start justify-between rounded-xl border bg-white pb-4 drop-shadow-md duration-300 hover:opacity-90 hover:drop-shadow-xl lg:w-5/12 ">
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
                      <li style={{ fontSize: '1rem' }} className="text-body" key={cardDescription}>
                        {cardDescription}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ul className="mb-4 flex flex-col gap-1 px-6">
                <li className="font-inter">Weekly Workout Schedules</li>
                <li className="font-inter">Customized Meal Plans</li>
                <li className="font-inter">Progress Tracking</li>
                <li className="font-inter">Increased weight levels</li>
              </ul>
            </Link>
            <div className="w-full px-6">
              <AddToCart
                large
                variants={program.variants}
                availableForSale={program.availableForSale}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
}
