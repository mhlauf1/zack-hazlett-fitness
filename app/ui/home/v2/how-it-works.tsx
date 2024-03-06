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
  return <div className="my-4 h-[1px] w-full bg-neutral-300" />;
};

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-4">
      <span className="text-brand">{number}</span>
      <h3 className="text-2xl">{title}</h3>
    </div>
    <Divider />
    <div>{/* <p className="text-body">{description}</p> */}</div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="flex h-auto flex-col">
      {/* <h3>How it works</h3> */}
      <div className="grid-cols-2">
        <div className="grid grid-cols-1 gap-12  lg:gap-6">
          {stepData.map((step) => (
            <div key={step.number}>
              <ProcessStep number={step.number} title={step.title} description={step.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
