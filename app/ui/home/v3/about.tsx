import { ButtonBento } from 'components/buttons';
import Image from 'next/image';
import { IoMdArrowForward } from 'react-icons/io';
import SectionHeader from './section-header';

const bullets = [
  'Explore, Engage, Excel',
  'Holistic Health and Nutrition',
  'Sustainable Lifestyle Changes',
  'Expert Guidance and Support'
];

const BulletItem = ({ text }: { text: string }) => (
  <li className="text-body flex items-center gap-2">
    <IoMdArrowForward />
    <span>{text}</span>
  </li>
);

export default function About() {
  return (
    <section className="mx-2 mb-8 flex flex-col gap-2 bg-white text-[#232323] md:mx-4 lg:mx-6 lg:mb-20 lg:flex-row">
      <div className="flex w-full flex-col items-start rounded-xl border border-neutral-300 bg-neutral-100 px-8 py-16 duration-500  lg:w-3/5">
        <SectionHeader text="Our Trainer" />
        <h2 className="mb-6 mt-8 w-full md:w-3/4 lg:mb-12 lg:w-[27ch]">
          Experience the Difference: <br />
          <span className="text-xl text-neutral-600 md:text-3xl lg:text-4xl">
            Tailored Guidance from Zack Hazlett, Your Fitness & Nutrition Expert
          </span>
        </h2>
        <p style={{ lineHeight: '165%' }} className="text-body w-5/6">
          Unlock your fitness potential with Zack's expertly designed courses, available for
          immediate download. Each program is crafted from his wealth of knowledge as a seasoned
          personal trainer.
        </p>
        <div className="mb-16 mt-8 grid grid-cols-1 gap-4 md:mb-0 md:mt-0 md:grid-cols-2 lg:my-12 lg:grid-cols-2 lg:gap-6">
          {bullets.map((item) => (
            <div>
              <BulletItem text={item} />
            </div>
          ))}
        </div>
        <ButtonBento>About Zack</ButtonBento>
      </div>
      <div className="relative hidden rounded-xl border border-neutral-200 lg:flex lg:w-2/5 lg:flex-1">
        <Image
          className="rounded-xl"
          src="/hazlett-hero-1.png"
          objectFit="cover"
          alt="Zack Hazlett Fitenss"
          fill
        />
      </div>
      <div className="relative flex rounded-xl border border-neutral-200 lg:hidden lg:w-2/5 lg:flex-1">
        <Image
          className="flex flex-1 rounded-xl"
          src="/hazlett-hero-1.png"
          objectFit="cover"
          alt="Zack Hazlett Fitenss"
          width={300}
          height={600}
        />
      </div>
    </section>
  );
}
