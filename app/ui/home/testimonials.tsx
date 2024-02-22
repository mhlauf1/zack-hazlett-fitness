import SectionLabel from 'components/section-label';
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
    <div className="mx-16 flex flex-col">
      <div className="mb-2 flex gap-1">
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
      </div>
      <p className="mb-4 text-xl leading-relaxed	">{quote}</p>
      <div>
        <h4 className="text-lg">{name}</h4>
        <span className="text-lg text-gray-300">{program}</span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="flex h-auto flex-col px-4 pt-48 sm:px-8 md:px-12 lg:px-16 lg:pt-72">
      <div className="mb-8 flex">
        <SectionLabel text="Testimonials" />
      </div>
      <h3 className="w-5/12 text-2xl leading-relaxed">Hear what my clients have to say</h3>
      <div className="mt-12 flex gap-16">
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
    </section>
  );
}
