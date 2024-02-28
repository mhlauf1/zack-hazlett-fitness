import { BlueButton } from 'components/buttons';

const stepData = [
  {
    title: 'Browse Programs',
    number: '01',
    description:
      "Whether you're looking to shed pounds, build muscle, or enhance endurance, you'll find a program that aligns with your personal health ambitions."
  },
  {
    title: 'Mark Your Purchase',
    number: '02',
    description:
      "Once you've found your ideal program, secure your copy with our secure purchasing process."
  },
  {
    title: 'Download Your Program',
    number: '03',
    description: 'Immediately after purchase, your program becomes available for download.'
  },
  {
    title: 'Get To Work',
    number: '04',
    description:
      'This digital format ensures that you can start your fitness journey right away and revisit the program whenever you need, forever transforming your approach to health and fitness.'
  }
];
const Divider = () => {
  return <div className="my-6 h-[1px] w-full bg-neutral-300" />;
};

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="flex flex-col border-l border-neutral-300 p-8">
    <div className="flex items-center gap-10">
      <span className="text-brand">{number}</span>
      <h3>{title}</h3>
    </div>
    <Divider />
    <div>
      <p className="text-body">{description}</p>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="mx-4 mt-32 flex h-auto flex-col items-center rounded-md px-6 py-24 sm:px-8 md:px-12 lg:mx-6 lg:mt-52 lg:px-16 lg:py-32">
      <h2>How it works</h2>
      <div className="my-24 grid-cols-2">
        <div className="container mx-auto lg:px-4">
          <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
            {stepData.map((step) => (
              <div key={step.number}>
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/4">
        <BlueButton href="/programs">Browse Programs</BlueButton>
      </div>
    </section>
  );
}
