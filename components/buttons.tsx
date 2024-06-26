import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import styles from '../app/ui/styles.module.scss';

const buttonClasses =
  'relative flex w-full min-w-[350px] items-center justify-center rounded-full bg-blue-600 duration-500 ease-in-out hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500 p-3 lg:p-4 tracking-wide text-white';

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

export const ButtonBento = ({
  children,
  dark,
  full
}: {
  children: ReactNode;
  dark?: boolean;
  full?: boolean;
}) => {
  let baseStyle = 'text rounded-full border bg-gradient-to-b hover:opacity-90 lg:px-12 px-10 py-3';
  if (full) {
    baseStyle += ' w-full';
  }
  if (dark) {
    return (
      <button
        className={`${baseStyle} border-[#232323]  from-[#4e4e4e] to-[#232323]  text-neutral-200 focus:border-neutral-700 active:border-neutral-700`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      style={{ whiteSpace: 'nowrap', textAlign: 'center' }}
      className={`${baseStyle} ${
        full && 'w-full'
      } border-neutral-400 from-[#FFFFFF] to-[#eaeaea] text-[#232323] hover:bg-neutral-300 hover:opacity-70 focus:border-neutral-500 focus:opacity-50 active:border-neutral-500 active:opacity-50`}
    >
      {children}
    </button>
  );
};

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

const Btn = ({
  children,
  href,
  dark,
  white
}: {
  children: ReactNode;
  href: string;
  dark?: boolean;
  white?: boolean;
}) => {
  const isLight =
    'font-inter rounded-full bg-blue-600/10 hover:bg-blue-600/20 duration-300  px-4 py-3 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 focus-visible:outline-blue-600 lg:px-16 lg:py-4';
  const isDark =
    'font-inter rounded-full bg-blue-600  px-4 py-3   text-sm font-semibold leading-6 text-blue-50 ring-1 ring-inset ring-blue-600/10 focus-visible:outline-blue-600 lg:px-16 lg:py-4';

  const isWhite =
    'font-inter rounded-full bg-white  px-4 py-3  text-sm font-semibold leading-6 text-blue-700 ring-1 ring-inset ring-blue-600/10 focus-visible:outline-blue-600 lg:px-16 lg:py-4';

  const handleBg = () => {
    if (dark) {
      return isDark;
    }
    if (white) {
      return isWhite;
    }
    return isLight;
  };
  return (
    <Link href={href}>
      <button className={handleBg()}>{children}</button>
    </Link>
  );
};

export { Btn, Button, DarkButton, ProgramButton };
