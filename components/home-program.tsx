'use client';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Image from 'next/image';

type Props = {
  featuredProgram: any;
};

const HomeProgram = ({ featuredProgram }: Props) => {
  const dynamic = 'force-dynamic';

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
    <div key={featuredProgram.id} className="group relative">
      <div className="relative">
        <div className="h-auto w-auto">
          <Image
            src={featuredProgram.featuredImage?.url}
            alt={featuredProgram.title}
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="sticky bottom-0 z-20 flex flex-col justify-between border-b bg-white pb-4 pt-6  duration-150 md:flex-row">
          <div className="flex flex-col">
            <h2 className=" text-3xl font-normal text-stone-800">{featuredProgram.title}</h2>
            <Price
              amount={featuredProgram.priceRange.maxVariantPrice.amount}
              currencyCode={featuredProgram.priceRange.maxVariantPrice.currencyCode}
              className="text-body"
            />
          </div>
          <div className="z-20 mt-4 flex flex-col gap-4 md:mt-0 md:w-[300px]">
            <AddToCart
              large
              variants={featuredProgram.variants}
              availableForSale={featuredProgram.availableForSale}
            />
          </div>
        </div>
        <div className="tex-sm mt-2 w-full md:w-1/2">{getCardDescription(featuredProgram)}</div>
      </div>
    </div>
  );
};

export default HomeProgram;
