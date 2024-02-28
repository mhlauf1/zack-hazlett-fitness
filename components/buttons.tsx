import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import styles from '../app/ui/styles.module.scss';

const buttonClasses =
  'relative flex w-full items-center justify-center rounded-full bg-blue-600 duration-300 ease-in-out hover:bg-blue-500 p-4 tracking-wide text-white';

const blue = 'bg-blue-600';
const darkBlue = 'bg-blue-800';

export const BlueButton = ({
  children,
  href,
  noIcon,
  dark
}: {
  children: ReactNode;
  href: string;
  noIcon?: boolean;
  dark?: boolean;
}) => (
  <Link href={href}>
    <button
      aria-label="Please select an option"
      aria-disabled
      className={`${buttonClasses} ${dark && darkBlue}`}
    >
      {!noIcon ? (
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
      ) : null}

      {children}
    </button>
  </Link>
);

const Button = ({
  children,
  href,
  light
}: {
  children: ReactNode;
  href: string;
  light?: boolean;
}) => {
  return (
    <Link className={styles.buttonContainer} href={href}>
      <button className={light ? `bg-white ${styles.buttonPrimary}` : `${styles.buttonPrimary}`}>
        {children}
        <MdArrowOutward className={`${styles.arrowIcon} text-[#232323]`} size={20} />
      </button>
    </Link>
  );
};

const DarkButton = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link className={styles.buttonContainer} href={href}>
      <button className={styles.darkButton}>
        {children}
        <MdArrowOutward className={`${styles.arrowIconDark} text-[#E5E5E5]`} size={20} />
      </button>
    </Link>
  );
};

const ProgramButton = ({
  children,
  href,
  light
}: {
  children: ReactNode;
  href: string;
  light?: boolean;
}) => {
  return (
    <Link className={styles.programButtonContainer} href={href}>
      <button className={styles.buttonProgram}>
        {children}
        <MdArrowOutward className={styles.programArrowIcon} size={20} />
      </button>
    </Link>
  );
};

export { Button, DarkButton, ProgramButton };
