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
        <span className="text-lg">{stepNumber}</span>
        <h4 className="text-2xl">{title}</h4>
      </div>
      <div className="mt-4 flex flex-1 lg:mt-0">
        <p className="text-xl leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="my-16 h-[2px] w-full bg-gray-500" />;
};

export default function HowItWorks() {
  return (
    <section className="flex h-auto flex-col px-4 pt-48 sm:px-8 md:px-12  lg:px-16 lg:pt-72">
      <div className="mb-8 flex items-center justify-between">
        <SectionLabel text="How It Works" />
        <p>HAZLETT</p>
      </div>
      <h3 className="sm:w-11/13 w-full text-xl leading-relaxed md:w-10/12 lg:w-1/2 lg:text-2xl">
        Building strength is key to a healthy, active life. Zack's programs are personalized to fit
        your body and lifestyle, helping you get stronger in the way that's best for you.{' '}
        <strong>Here's how to start:</strong>
      </h3>
      <div className="mt-24">
        <StepItem
          stepNumber="01"
          title="Browse Programs"
          description="Dive into our wide selection of programs, each designed with specific fitness goals in mind. Whether you're looking to shed pounds, build muscle, or enhance endurance, you'll find a program that aligns with your personal health ambitions."
        />
        <Divider />
        <StepItem
          stepNumber="02"
          title="Mark Your Purchase"
          description="Once you've found your ideal program, secure your copy with our straightforward purchasing process. Rest assured, your transaction is encrypted, keeping your personal and financial information safe."
        />
        <Divider />
        <StepItem
          stepNumber="03"
          title="Download Your Program"
          description=" Immediately after purchase, your program becomes available for download. This digital format ensures that you can start your fitness journey right away and revisit the program whenever you need, forever transforming your approach to health and fitness."
        />
      </div>
    </section>
  );
}
