import { AddToCartButton } from 'components/buttons';
import { getProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function AllProductsList() {
  const programs = await getProducts({});
  return (
    <>
      {programs &&
        programs.map((program) => (
          <Link
            className="0 hover:border-grey-100 focus:border-grey-200 active:border-grey-200 relative flex h-auto flex-1 flex-col items-center rounded-xl border-2 bg-white duration-500 ease-in-out hover:bg-white focus:bg-white active:border-2 active:bg-white"
            href={`/program/${program.handle}`}
          >
            <div className="relative flex h-[250px] w-full">
              <Image
                src={program.featuredImage?.url}
                alt={program.title}
                height={200}
                width={500}
                objectFit="cover"
                className="w-full rounded-t-xl object-cover"
              />
            </div>
            <div className="mb-4 mt-6 flex h-full w-full flex-col justify-between px-4">
              <div>
                <h3 className="mb-4 text-2xl">{program.title}</h3>
                <p className="text-body mb-8">{program.description}</p>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-body">$29</span>
                <AddToCartButton />
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}
