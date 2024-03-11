import { MdStarRate } from 'react-icons/md';

const Testimonial = ({
  quote,
  name,
  program
}: {
  quote: string;
  name: string;
  program: string;
}) => {
  return (
    <div className="flex h-auto flex-col rounded-xl border border-neutral-300 bg-[#F3F1ED] px-4 py-4 md:h-[500px]">
      <div className="h-10 w-10 rounded-full bg-gray-200 md:h-14 md:w-14" />
      <div className="mb-2 mt-16 flex gap-1">
        <MdStarRate className="text-yellow-400" />
        <MdStarRate className="text-yellow-400" />
        <MdStarRate className="text-yellow-400" />
        <MdStarRate className="text-yellow-400" />
        <MdStarRate className="text-yellow-400" />
      </div>
      <p className="mb-4 font-medium leading-relaxed text-[#232323]">{quote}</p>
      <div className="mb-16 mt-8">
        <h4 className="text-md text-neutral-600">{name}</h4>
        <span className="text-neutral-6000 text-md">{program}</span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="mx-6 mb-12 mt-8 flex h-auto flex-col items-center py-24 md:mx-4 lg:mx-6 lg:mt-24 lg:px-0  lg:py-16">
      <h2 className="w-full text-center md:w-[8ch]">Real People, Real Results</h2>
      <div className="my-8 grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-4">
        <Testimonial
          name="John Doe"
          program="Fitness"
          quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
        />
        <div className="md:pt-12">
          <Testimonial
            name="John Doe"
            program="Fitness"
            quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
          />
        </div>
        <Testimonial
          name="John Doe"
          program="Fitness"
          quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
        />
        <div className="md:pt-12">
          <Testimonial
            name="John Doe"
            program="Fitness"
            quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
          />
        </div>
      </div>
    </section>
  );
}
