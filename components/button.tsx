import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Button = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link className="flex w-full lg:w-auto" href={href}>
      <button className="text-md w-full rounded-full border-none bg-[#008FED] px-12 py-3 font-medium lg:w-auto lg:py-4 lg:text-lg">
        {children}
      </button>
      <div className="flex h-12 w-14 items-center justify-center rounded-full bg-[#008FED] duration-200 hover:rotate-45 lg:h-16 lg:w-16">
        <MdArrowOutward size={24} />
      </div>
    </Link>
  );
};

export default Button;
