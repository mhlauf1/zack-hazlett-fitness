import AnimateWrapper from 'components/animated/animate-wrapper';
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
    <div className="flex flex-col">
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
    <section className="flex h-auto flex-col bg-[#232323] px-4 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32">
      <div className="mb-8 flex">
        <AnimateWrapper>
          <SectionLabel text="Testimonials" light />
        </AnimateWrapper>
      </div>
      <AnimateWrapper>
        <h3 className="w-full text-lg leading-relaxed md:w-1/2 md:text-xl lg:w-5/12 lg:text-2xl">
          Hear what my clients have to say
        </h3>
      </AnimateWrapper>

      <div className="mt-12 flex flex-col gap-24 lg:flex-row">
        <AnimateWrapper>
          <Testimonial
            name="John Doe"
            program="Fitness"
            quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
          />
        </AnimateWrapper>
        <AnimateWrapper>
          <Testimonial
            name="John Doe"
            program="Fitness"
            quote="'I have been using the premade downloadable fitness plans from this website for a few months now and I am extremely satisfied with the results. The workouts are challenging but effective, and the nutrition plans have helped me improve my eating habits.'"
          />
        </AnimateWrapper>
      </div>
    </section>
  );
}
