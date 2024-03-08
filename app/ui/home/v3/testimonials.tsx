import { MdStarRate } from 'react-icons/md';

const Divider = () => {
  return <div className="my-6 h-[1px] w-full bg-neutral-300" />;
};

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
    <div className="flex flex-col">
      <div className="mb-2 flex gap-1">
        <MdStarRate className="text-blue-400" />
        <MdStarRate className="text-blue-400" />
        <MdStarRate className="text-blue-400" />
        <MdStarRate className="text-blue-400" />
        <MdStarRate className="text-blue-400" />
      </div>
      <p className="mb-4 leading-relaxed text-gray-200">{quote}</p>
      <div>
        <h4 className="text-lg text-white">{name}</h4>
        <span className="text-lg text-gray-200">{program}</span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="mx-2 mb-12 mt-12 flex h-auto flex-col rounded-xl bg-gradient-to-b from-neutral-500  to-neutral-600 px-8 py-24 md:mx-4 lg:mx-6 lg:mt-16  lg:py-16">
      <div className="flex flex-row items-end justify-between">
        <h2 className="w-[16ch] text-white">Hear What Clients Have To Say</h2>
      </div>
      <Divider />
      <div className="my-8 grid-cols-2">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <Testimonial
              name="John Doe"
              program="Fitness"
              quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
            />
            <Testimonial
              name="John Doe"
              program="Fitness"
              quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
