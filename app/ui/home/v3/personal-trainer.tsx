import { ButtonBento } from 'components/buttons';
import Image from 'next/image';
import Link from 'next/link';

export default function PersonalTraining() {
  return (
    <section className="relative  mx-2 mt-8 flex items-center rounded-xl  bg-[#232323] md:mx-4 lg:mx-6 lg:mt-20">
      <div className="relative h-[60vh] w-[100vw] lg:block lg:h-[80vh] lg:w-full">
        <Image
          src="/running-1.png"
          fill
          objectFit="cover"
          className="rounded-xl"
          alt="Hero image for Zack Hazlett Fitiness website"
        />
      </div>
      <div className="z-5 absolute left-6 lg:left-12">
        <h2 className="z-5 mb-8 w-2/3 text-white">Interested in One on One Personal Training?</h2>
        <div className="w-5/6 md:w-1/2">
          <Link href="/personal-training">
            <ButtonBento>Let's work together</ButtonBento>
          </Link>
        </div>
      </div>
    </section>
  );
}
