import { ButtonBento } from 'components/buttons';
import { AddToCart } from 'components/cart/add-to-cart';
import { getProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'Weekly Workout Schedules',
  'Customized Meal Plans',
  'Flexibility Improvement',
  '24/7 Support',
  'Increased Energy Levels',
  'Progress Tracking'
];

export async function AllProductsList() {
  const programs = await getProducts({});
  return (
    <>
      {programs &&
        programs.map((program) => (
          <div className="flex flex-1 flex-col flex-wrap justify-between gap-2 rounded-xl border border-neutral-400 px-6 pb-4 pt-12 duration-300 lg:px-6 lg:pt-16">
            <div className="flex flex-1 flex-col  items-start lg:py-4">
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
              <div className="mb-4 mt-16 flex w-full items-start justify-between lg:mb-6">
                <div className="flex w-full flex-col justify-between gap-2">
                  <span className="text-body-small uppercase">{program.tags}</span>
                  <h3 className="text-2xl">{program.title}</h3>
                </div>
                <p className="mb-4 text-lg lg:text-2xl">$89</p>
              </div>
              <div>
                <p className="mb-4">What&#39;s Included:</p>
                <ul className="mb-6 grid grid-cols-1 gap-4 gap-x-8 md:grid-cols-2">
                  {benefits.map((benefit) => (
                    <li className="flex items-center gap-2" key={benefit}>
                      <div className="h-1 w-1 rounded-full bg-neutral-300" />
                      <span className="text-body-small text-center">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 w-full lg:mt-12">
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
    </>
  );
}
