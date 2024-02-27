import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import styles from '../app/ui/styles.module.css';

const Button = ({
  children,
  href,
  fill
}: {
  children: ReactNode;
  href: string;
  fill?: boolean;
}) => {
  return (
    <Link className={styles.buttonContainer} href={href}>
      <button className={styles.buttonPrimary}>
        {children}
        <MdArrowOutward className={`${styles.arrowIcon} text-[#232323]`} size={24} />
      </button>
    </Link>
  );
};

export default Button;
