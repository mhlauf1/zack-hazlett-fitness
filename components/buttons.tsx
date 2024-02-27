import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import styles from '../app/ui/styles.module.scss';

const Button = ({
  children,
  href,
  light,
  bg
}: {
  children: ReactNode;
  href: string;
  light?: boolean;
  bg?: string;
}) => {
  return (
    <Link className={styles.buttonContainer} href={href}>
      <button className={light ? `bg-white ${styles.buttonPrimary}` : `${styles.buttonPrimary}`}>
        {children}
        <MdArrowOutward className={`${styles.arrowIcon} text-[#232323]`} size={24} />
      </button>
    </Link>
  );
};

const DarkButton = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link className={styles.buttonContainer} href={href}>
      <button className={styles.darkButton}>
        {children}
        <MdArrowOutward className={`${styles.arrowIconLight} text-[#E5E5E5]`} size={24} />
      </button>
    </Link>
  );
};

export { Button, DarkButton };
