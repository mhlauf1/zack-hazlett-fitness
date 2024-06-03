'use client';
import { Link } from 'react-scroll';

type Props = {
  text: string;
};

const HeroButton = ({ text }: Props) => {
  return (
    <Link smooth={true} duration={500} to="featuredProgram">
      <div className="font-inter cursor-pointer rounded-full bg-blue-500 px-10 py-4 text-white duration-300 hover:bg-blue-400">
        {text}
      </div>
    </Link>
  );
};

export default HeroButton;
