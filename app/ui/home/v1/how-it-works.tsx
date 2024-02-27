import AnimateWrapper from 'components/animated/animate-wrapper';
import SectionLabel from 'components/section-label';

const StepItem = ({
  stepNumber,
  title,
  description
}: {
  stepNumber: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-1 flex-col gap-2 lg:gap-0">
        <span className="text-lg text-neutral-100">{stepNumber}</span>
        <h4 className="text-2xl text-neutral-100">{title}</h4>
      </div>
      <div className="mt-4 flex flex-1 lg:mt-0">
        <p className="text-lg leading-loose text-neutral-300 lg:text-xl">{description}</p>
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="my-12 h-[1px] w-full bg-neutral-300" />;
};

export default function HowItWorks() {
  return (
    <section className="mx-4 mt-32 flex h-auto flex-col rounded-md bg-[#232323] px-6 py-24 sm:px-8 md:px-12 lg:mx-6 lg:mt-48 lg:px-16 lg:py-32">
      <div className="mb-8 flex flex-col-reverse items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-0">
        <AnimateWrapper>
          <SectionLabel text="How It Works" light />
        </AnimateWrapper>
        <AnimateWrapper>
          <p className="text-neutal-100 hidden lg:block">HAZLETT</p>
        </AnimateWrapper>
      </div>
      <AnimateWrapper>
        <h3 className="sm:w-11/13 w-full text-lg leading-relaxed text-neutral-100 md:w-10/12 md:text-xl lg:w-1/2 lg:text-2xl">
          Building strength is key to a healthy, active life. Zack's programs are personalized to
          fit your body and lifestyle, helping you get stronger in the way that's best for you.{' '}
        </h3>

        <span className="mt-4 text-lg font-bold">Here's how to start:</span>
      </AnimateWrapper>

      <div className="mt-16">
        <AnimateWrapper>
          <StepItem
            stepNumber="01"
            title="Browse Programs"
            description="Dive into our wide selection of programs, each designed with specific fitness goals in mind. Whether you're looking to shed pounds, build muscle, or enhance endurance, you'll find a program that aligns with your personal health ambitions."
          />
          <Divider />
        </AnimateWrapper>
        <AnimateWrapper>
          <StepItem
            stepNumber="02"
            title="Mark Your Purchase"
            description="Once you've found your ideal program, secure your copy with our straightforward purchasing process. Rest assured, your transaction is encrypted, keeping your personal and financial information safe."
          />
          <Divider />
        </AnimateWrapper>
        <AnimateWrapper>
          <StepItem
            stepNumber="03"
            title="Download Your Program"
            description=" Immediately after purchase, your program becomes available for download. This digital format ensures that you can start your fitness journey right away and revisit the program whenever you need, forever transforming your approach to health and fitness."
          />
        </AnimateWrapper>
      </div>
    </section>
  );
}
