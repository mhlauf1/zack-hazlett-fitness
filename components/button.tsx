import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Button = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <Link className="flex w-full lg:w-auto" href={href}>
      <button className="text-md w-full rounded-full border-none bg-[#008FED] px-12 py-4 font-medium lg:w-auto lg:text-lg">
        {children}
      </button>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#008FED] duration-200 hover:rotate-45">
        <MdArrowOutward size={32} />
      </div>
    </Link>
  );
};

export default Button;
