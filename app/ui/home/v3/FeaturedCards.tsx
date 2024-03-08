'use client';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { ButtonBento } from '../../../../components/buttons';

type FeaturedProgramProps = {
  program: any;
  reverse?: boolean;
};

const benefits = [
  'Weekly Workout Schedules',
  'Customized Meal Plans',
  '24/7 Support',
  'Flexibility Improvement',
  'Increased Energy Levels',
  'Progress Tracking'
];

const FeaturedProgram: React.FC<FeaturedProgramProps> = ({ program, reverse }) => {
  return (
    <>
      <div
        className={`flex w-full flex-col flex-wrap justify-between gap-16 rounded-xl border bg-neutral-100 lg:flex-row ${
          reverse ? 'flex-row-reverse' : null
        } border-neutral-400 px-6 py-16 lg:px-12 `}
      >
        <div className="flex flex-1 flex-col  gap-6 lg:gap-12 lg:py-16">
          <div className="flex items-start gap-6">
            <Image
              className="inline rounded-xl lg:hidden"
              src={program.featuredImage?.url}
              objectFit="cover"
              alt={program.title}
              height={100}
              width={100}
            />
            <div className="flex flex-col items-start">
              <div className="flex w-full flex-col justify-between gap-2 lg:mb-4 lg:gap-4">
                <span className="text-body-small uppercase">{program.tags}</span>
                <h2>{program.title}</h2>
              </div>
              <p className="text-sm text-[#232323] lg:w-5/6 lg:text-lg">{program.description}</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-2xl">What's Included:</h3>
            <ul className="grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="text-body flex items-center gap-2">
                  <IoMdArrowForward />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4">Price: $89</p>
            <div className="flex items-center justify-between">
              <div>
                <ButtonBento>Add To Cart</ButtonBento>
              </div>
              <Link
                className="text-body-small uppercase underline"
                href={`/program/${program.handle}`}
              >
                View all Details
              </Link>
            </div>
          </div>
        </div>
        <div className="relative hidden h-[70vh] w-full flex-1 justify-center lg:flex lg:h-auto lg:w-[50vw] lg:justify-end">
          <Image
            className="rounded-xl"
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

export default function FeaturedCards({ programs }: { programs: Product[] }) {
  return (
    <div className="flex flex-col gap-8">
      <FeaturedProgram program={programs[2]} />
      <FeaturedProgram reverse program={programs[1]} />
    </div>
  );
}
