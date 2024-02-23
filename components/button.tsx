import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import styles from '../app/ui/styles.module.css';

const Button = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link className={`${styles.buttonContainer} flex w-full lg:w-auto`} href={href}>
      <button className="mb-2 me-2 flex w-full items-center justify-center  gap-4 rounded-full border border-blue-500 px-5 py-2.5 text-center text-sm font-medium text-blue-500 duration-300 ease-in-out hover:bg-blue-500 hover:text-white focus:border-blue-400 focus:bg-blue-300 lg:w-auto">
        {children}
        <MdArrowOutward className={`${styles.arrowIcon} text-blue-500`} size={20} />
      </button>
    </Link>
  );
};

export default Button;
