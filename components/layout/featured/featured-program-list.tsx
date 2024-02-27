'use client';
import Button from 'components/button';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../app/ui/styles.module.css';

type FeaturedProgramCardProps = {
  program: any;
  contentLeft?: boolean;
};

const FeaturedProgramCard: React.FC<FeaturedProgramCardProps> = ({ program, contentLeft }) => {
  return (
    <Link className={styles.featuredProgramCardContainer} href="/">
      <div className={`relative flex gap-24 ${contentLeft ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="relative flex">
          <Image
            src={program.featuredImage?.url}
            alt={program.title}
            height={800}
            width={1000}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="mt-16">
            <span className="uppercase">{program.tags}</span>
            <h2 className="mb-4 mt-6 w-[8ch]">{program.title}</h2>
            <p className="w-3/4">{program.description}</p>
          </div>
          <div className="mt-8">
            <Button href="/">Shop Now</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function FeaturedProgramList({ programs }: { programs: Product[] }) {
  return (
    <div className="flex flex-col gap-72">
      <FeaturedProgramCard program={programs[2]} />
      <FeaturedProgramCard contentLeft program={programs[1]} />
      <FeaturedProgramCard program={programs[0]} />
    </div>
  );
}
