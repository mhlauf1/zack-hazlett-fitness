import ProfileImages from 'components/profile-images';
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
        <MdStarRate className="text-blue-600" />
        <MdStarRate className="text-blue-600" />
        <MdStarRate className="text-blue-600" />
        <MdStarRate className="text-blue-600" />
        <MdStarRate className="text-blue-600" />
      </div>
      <p className="text-body mb-4 leading-relaxed">{quote}</p>
      <div>
        <h4 className="text-lg text-[#232323]">{name}</h4>
        <span className="text-lg text-gray-700">{program}</span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="lg:mt-42 mx-4 mb-12 mt-32 flex h-auto flex-col rounded-md bg-white px-6 py-24 sm:px-8 md:px-12 lg:mx-6 lg:px-16 lg:py-32">
      <div className="flex flex-row items-end justify-between">
        <h2 className="w-[16ch] lg:w-[12ch]">Hear What Clients Have To Say</h2>
        <ProfileImages />
      </div>
      <Divider />
      <div className="my-24 grid-cols-2">
        <div className="container mx-auto px-4">
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
