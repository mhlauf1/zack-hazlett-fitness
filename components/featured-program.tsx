'use client';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { AddToCartButton } from './buttons';

type FeaturedProgramProps = {
  program: any;
};

const benefits = [
  'Weekly Workout Schedules',
  'Customized Meal Plans',
  '24/7 Support',
  'Flexibility Improvement',
  'Increased Energy Levels',
  'Progress Tracking'
];

const FeaturedProgram: React.FC<FeaturedProgramProps> = ({ program }) => {
  return (
    <>
      <div className="flex w-full flex-col flex-wrap justify-between border-y border-neutral-200 lg:flex-row">
        <div className="flex flex-1 flex-col justify-between gap-6 px-20 py-12 lg:gap-16">
          <div className="flex flex-col items-start">
            <div className="flex w-full flex-col justify-between gap-6 lg:mb-8">
              <h2>{program.title}</h2>
              <Link
                className="text-body-small uppercase underline"
                href={`/program/${program.handle}`}
              >
                View all Details
              </Link>
            </div>
            <p className="text-body w-5/6">{program.description}</p>
          </div>
          <div>
            <h3 className="mb-6">What's Included:</h3>
            <ul className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="text-body flex items-center gap-2">
                  <IoMdArrowForward />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl">
              <p>Price: $89</p>
            </div>
            <div>
              <AddToCartButton />
            </div>
          </div>
        </div>
        <div className="relative flex h-auto w-full flex-1 justify-center lg:w-[50vw] lg:justify-end">
          <Image
            className=""
            src={program.featuredImage?.url}
            objectFit="cover"
            alt={program.title}
            fill
          />
        </div>
      </div>
    </>
  );
};

export default function FeaturedPrograms({ programs }: { programs: Product[] }) {
  return (
    <div className="flex flex-col gap-16">
      <FeaturedProgram program={programs[2]} />
      <FeaturedProgram program={programs[1]} />
    </div>
  );
}
