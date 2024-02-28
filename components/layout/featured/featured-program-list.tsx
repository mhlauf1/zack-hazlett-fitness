'use client';
import { ProgramButton } from 'components/buttons';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../app/ui/styles.module.scss';

type FeaturedProgramCardProps = {
  program: any;
  contentLeft?: boolean;
};

const FeaturedProgramCard: React.FC<FeaturedProgramCardProps> = ({ program, contentLeft }) => {
  return (
    <Link className={styles.featuredProgramCardContainer} href={`/program/${program.handle}`}>
      <div
        className={`relative flex flex-col gap-12 lg:gap-24 ${
          contentLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <div className="relative flex">
          <Image
            src={program.featuredImage?.url}
            alt={program.title}
            height={800}
            width={1000}
            className="lg:min-w-[600px]"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="mt-0 lg:mt-16">
            <span className="text-body uppercase">{program.tags}</span>
            <h2 className="mb-2  mt-2 w-[9ch] lg:mt-6">{program.title}</h2>
            <p className="text-body lg:w-3/4">{program.description}</p>
          </div>
          <div className="mt-6 lg:mt-8">
            <ProgramButton href="/">Shop Now</ProgramButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function FeaturedProgramList({ programs }: { programs: Product[] }) {
  return (
    <div className="flex flex-col gap-32 lg:gap-72">
      <FeaturedProgramCard program={programs[2]} />
      <FeaturedProgramCard contentLeft program={programs[1]} />
      <FeaturedProgramCard program={programs[0]} />
    </div>
  );
}
