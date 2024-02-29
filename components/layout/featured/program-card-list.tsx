'use client';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

type ProgramCardProps = {
  program: any;
  img: string;
  icon: string;
  small?: boolean;
};

const FeaturedProgramCard: React.FC<ProgramCardProps> = ({ program, img, icon, small }) => {
  return (
    <Link
      className="relative flex flex-1 flex-col items-center rounded-lg border border-neutral-200 bg-neutral-50 px-8 py-6 duration-500 ease-in-out hover:border-blue-500 hover:bg-white focus:border-blue-500 focus:bg-white active:border-2 active:border-blue-500 active:bg-white"
      href={`/program/${program.handle}`}
    >
      <div className="mb-4 flex w-full items-center justify-between">
        <Image src={icon} height={36} width={small ? 28 : 36} alt="Nutrition Icon" />
        <span className="rounded-full bg-neutral-100 px-4 py-2 text-orange-400">Best Seller</span>
      </div>
      <Image src={img} height={340} width={360} className="rounded-md" alt="Nutrition Icon" />
      <div className="mb-4 mt-6  flex  w-full items-center justify-between">
        <h3 className="text-2xl">{program.title}</h3>
        <span className="text-body">$29</span>
      </div>
      <p className="text-body">{program.description}</p>
    </Link>
  );
};

export default function ProgramCardList({ programs }: { programs: Product[] }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <FeaturedProgramCard program={programs[2]} img="/90day-plan.png" icon="/icon-3.svg" />
      <FeaturedProgramCard
        program={programs[1]}
        small
        img="/nutrition-plan.png"
        icon="/icon-1.svg"
      />
      <FeaturedProgramCard program={programs[0]} img="/endurance-plan.png" icon="/icon-2.svg" />
    </div>
  );
}
