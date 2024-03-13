import Image from 'next/image';
import { MdStarRate } from 'react-icons/md';

const Testimonial = ({
  quote,
  name,
  program,
  photoSrc
}: {
  quote: string;
  name: string;
  program: string;
  photoSrc: string;
}) => {
  return (
    <div className="flex h-auto flex-col rounded-xl border border-neutral-300 bg-[#F3F1ED] px-4 py-4 md:h-auto">
      <Image src={photoSrc} width={64} height={64} alt="Client Photo" className="rounded-full" />
      <div className="mb-2 mt-16 flex gap-1">
        <MdStarRate className="text-yellow-400" />
        <MdStarRate className="text-yellow-400" />
        <MdStarRate className="text-yellow-400" />
        <MdStarRate className="text-yellow-400" />
        <MdStarRate className="text-yellow-400" />
      </div>
      <p className="mb-4 font-medium leading-relaxed text-[#232323]">{quote}</p>
      <div className="mb-0 mt-8">
        <h4 className="text-md text-neutral-600">{name}</h4>
        <span className="text-neutral-6000 text-md">{program}</span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="mx-6 mt-8 flex h-auto flex-col items-center pb-12 pt-24 md:mx-4 lg:mx-6 lg:mb-12 lg:mt-24 lg:px-0  lg:py-16">
      <h2 className="mb-8 w-full text-center md:w-[8ch]">Real People, Real Results</h2>
      <div className="mb-4 mt-8 grid grid-cols-1 gap-4 md:grid-cols-2  lg:mb-8 lg:grid-cols-4">
        <Testimonial
          name="John Doe"
          program="Fitness"
          photoSrc="/client-1.png"
          quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
        />
        <Testimonial
          name="John Doe"
          photoSrc="/client-3.png"
          program="Fitness"
          quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
        />
        <Testimonial
          name="John Doe"
          photoSrc="/client-4.png"
          program="Fitness"
          quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
        />
        <Testimonial
          name="John Doe"
          program="Fitness"
          photoSrc="/client-1.png"
          quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
        />
      </div>
    </section>
  );
}
