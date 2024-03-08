'use client';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonBento } from '../../../../components/buttons';

type FeaturedProgramProps = {
  program: any;
  reverse?: boolean;
};

const benefits = [
  'Weekly Workout Schedules',
  'Customized Meal Plans',
  'Flexibility Improvement',
  '24/7 Support',
  'Increased Energy Levels',
  'Progress Tracking'
];

const FeaturedProgram: React.FC<FeaturedProgramProps> = ({ program, reverse }) => {
  return (
    <div className="flex flex-1 flex-col flex-wrap justify-between gap-2 rounded-xl border border-neutral-400 bg-neutral-100 px-6 pb-4 pt-12 duration-300 hover:bg-white focus:bg-white active:hover:bg-white lg:px-6 lg:pt-16">
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
          <ul className="mb-6 grid grid-cols-2 gap-4 gap-x-8">
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
            <ButtonBento full>Add To Cart</ButtonBento>
            <Link href={`/program/${program.handle}`}>
              <ButtonBento full dark>
                View all Details
              </ButtonBento>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Featured({ programs }: { programs: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
      <FeaturedProgram program={programs[2]} />
      <FeaturedProgram reverse program={programs[1]} />
      <FeaturedProgram reverse program={programs[0]} />
    </div>
  );
}
