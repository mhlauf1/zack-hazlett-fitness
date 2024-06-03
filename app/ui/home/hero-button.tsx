'use client';
import { Link } from 'react-scroll';

type Props = {
  text: string;
};

const HeroButton = ({ text }: Props) => {
  return (
    <div className="mt-12 flex cursor-pointer items-center gap-x-4">
      <Link
        smooth={true}
        duration={500}
        className="font-inter rounded-full bg-blue-600 px-4  py-3 text-sm  font-semibold leading-6 text-blue-50 ring-1 ring-inset ring-blue-600/10 duration-500 hover:opacity-90 focus-visible:outline-blue-600 lg:px-16 lg:py-4"
        to="featuredProgram"
      >
        {text}
      </Link>
    </div>
  );
};

export default HeroButton;
