import { ButtonBento } from 'components/buttons';
import Image from 'next/image';
import SectionHeader from './section-header';
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
      'This digital format ensures that you can start your fitness journey right away and revisit the program whenever you need.'
  }
];
const Card = ({ step }: { step: any }) => {
  return (
    <div className="flex  flex-col items-start gap-2 rounded-xl border border-neutral-400 bg-[#f3f1ed] px-8 py-8 lg:px-16">
      <div className="flex items-end gap-4">
        <span className="rounded-full from-neutral-50 to-neutral-100 text-[#2323238b]">
          {step.number}
        </span>
      </div>
      <h3 className="text-2xl text-[#232323]">{step.title}</h3>

      <p className="text-body-white text-[#2323238b]">{step.description}</p>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section className="mx-2 mb-8 flex flex-col gap-2   text-[#232323] md:mx-4 lg:mx-6 lg:mb-20 lg:flex-row">
      <div className="flex w-full rounded-xl border border-neutral-200 lg:w-2/6">
        <div className="relative hidden h-auto w-[100vw] flex-1 justify-center lg:flex lg:w-[50vw] lg:justify-end">
          <Image
            className="rounded-xl"
            src="/hazlett-hero-2.png"
            objectFit="cover"
            alt="Zack Hazlett Fitenss"
            fill
          />
        </div>
        <div className="relative flex flex-1 justify-center lg:hidden">
          <Image
            className="flex flex-1 rounded-xl"
            src="/hazlett-hero-2.png"
            objectFit="cover"
            alt="Zack Hazlett Fitenss"
            width={300}
            height={600}
          />
        </div>
      </div>
      <div className="flex  w-full flex-col items-start justify-end rounded-xl border border-neutral-200  bg-neutral-100 px-6 py-12 lg:px-16 lg:py-12">
        <SectionHeader text="How It Works" />
        <h2 className="mb-12 mt-8 w-5/6 text-[#232323] lg:w-[24ch]">
          4 Easy Steps To Start Your Health and Fitness Journey
        </h2>
        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {stepData.map((step) => (
            <Card step={step} />
          ))}
        </div>
        <ButtonBento>About Zack</ButtonBento>
      </div>
    </section>
  );
}
