import { ButtonBento } from 'components/buttons';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { getProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function AllProductsList() {
  const programs = await getProducts({});

  return (
    <>
      {programs &&
        programs.map((program) => (
          <div className="flex h-auto w-full flex-1 flex-col items-start  justify-between rounded-xl border  bg-white  pb-4 pt-0 duration-300 hover:opacity-90 ">
            <div className="w-full">
              <div className="relative flex h-[200px] w-full flex-col items-center gap-6 lg:h-[250px] ">
                <Image
                  src={program.featuredImage?.url}
                  objectFit="cover"
                  alt={program.title}
                  fill
                  className="flex flex-1 rounded-t-xl"
                />
              </div>
              <div className="px-6  lg:px-6">
                <div className="mb-2 mt-12 flex w-full items-start justify-between lg:mb-8">
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
                  <ul className="mb-6 grid grid-cols-1 gap-4 gap-x-8">
                    {program.metafields?.map((metafield: { value: any }) => {
                      const includedItems = JSON.parse(metafield.value).included;
                      return includedItems.map((item: string) => (
                        <li key={item} className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-neutral-300" />
                          <p style={{ fontSize: '1rem' }} className="text-body">
                            {item}
                          </p>
                        </li>
                      ));
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className=" mt-8 w-full px-6">
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
        ))}
    </>
  );
}
