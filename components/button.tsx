import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import styles from '../app/ui/styles.module.css';

const Button = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link className={`${styles.buttonContainer} flex w-full lg:w-auto`} href={href}>
      <button className="text-md w-full rounded-full border-none bg-[#008FED] px-10 py-3 font-medium lg:w-auto lg:py-4 lg:text-lg">
        {children}
      </button>
      <div className="flex h-12 w-14 items-center justify-center rounded-full bg-[#008FED] lg:h-16 lg:w-16">
        <MdArrowOutward className={styles.arrowIcon} size={24} />
      </div>
    </Link>
  );
};

export default Button;
