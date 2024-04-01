import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';

export default async function Featured() {
  const featuredProgram = await getCollectionProducts({ collection: FEATURED_PROGRAMS });

  function getCardDescription(program: any) {
    const cardDescription = program.metafields?.find(
      (metafield: any) => metafield.key === 'card_description'
    )?.value;

    return (
      <p className="text-body" key={cardDescription}>
        {cardDescription}
      </p>
    );
  }

  return (
    <section>
      <div className="mx-auto bg-white  px-6 py-24 sm:py-64 lg:px-20">
        <h2
          style={{ letterSpacing: 0.5 }}
          className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
        >
          Available Programs
        </h2>
        <h2
          style={{ letterSpacing: '-1px', lineHeight: '120%' }}
          className="font-inter mt-2 text-2xl font-bold text-gray-900 sm:text-4xl md:text-4xl lg:w-[42ch]"
        >
          Embark on a journey to peak fitness with Zack Hazlett Fitness. From intensive weight
          training to nourishing wellness practices. Find your strength and vitality for everyday
          health.
        </h2>

        <div className="relative mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {featuredProgram
            ? featuredProgram.map((program) => (
                <div key={program.id} className="group relative">
                  <div className="relative">
                    <div className="h-auto w-auto">
                      <Image
                        src={program.featuredImage?.url}
                        alt={program.title}
                        layout="responsive"
                        width={100}
                        height={100}
                        objectFit="cover"
                      />
                    </div>
                    <div className="sticky bottom-0 z-20 flex flex-col justify-between border-b bg-white pb-4 pt-6  duration-150 md:flex-row">
                      <div className="flex flex-col">
                        <h2 className=" text-3xl font-semibold text-stone-800">{program.title}</h2>
                        <Price
                          amount={program.priceRange.maxVariantPrice.amount}
                          currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                          className="text-body"
                        />
                      </div>
                      <div className="z-20 mt-4 flex flex-col gap-4 md:mt-0 md:w-[300px]">
                        <AddToCart
                          large
                          variants={program.variants}
                          availableForSale={program.availableForSale}
                        />
                      </div>
                    </div>
                    <div className="tex-sm mt-2 w-full md:w-1/2">{getCardDescription(program)}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
