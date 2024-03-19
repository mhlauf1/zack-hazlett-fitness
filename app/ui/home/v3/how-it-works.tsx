import { ButtonBento } from 'components/buttons';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './section-header';

const stepData = [
  {
    title: 'Browse Programs',
    number: '01',
    description:
      "Whether you're looking to shed pounds, build muscle, or enhance endurance, you'll find a program that aligns with your personal health ambitions."
  },
  {
    title: 'Make Your Purchase',
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
    <div className="flex  flex-col items-start gap-1 rounded-xl border border-neutral-400 bg-white px-8 py-6 lg:px-12">
      <span className="font-nohemi rounded-full from-neutral-50 to-neutral-100 font-light text-[#2323238b]">
        {step.number}
      </span>
      <h3 className="font-inter text-lg font-medium text-[#232323] md:text-xl">{step.title}</h3>
      <p className="text-body-white text-[#2323238b]">{step.description}</p>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section className="mx-2 mb-8 flex flex-col gap-8 text-[#232323] md:mx-4 md:mt-0 lg:mx-6 lg:mb-20 lg:flex-row lg:gap-2">
      <div className="flex w-full rounded-xl border border-neutral-200 lg:w-2/6">
        <div className="relative hidden h-auto w-full flex-1 justify-center lg:flex lg:justify-end">
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
      <div className="flex  w-full flex-col items-start justify-end rounded-xl border border-neutral-200  bg-neutral-100 px-4 py-6 lg:px-16 lg:py-12">
        <SectionHeader text="How It Works" />
        <h2 className="mb-12 mt-0 w-full text-[#232323] lg:mt-8 lg:w-[24ch]">
          4 Easy Steps To Start Your Health and Fitness Journey
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {stepData.map((step) => (
            <Card step={step} />
          ))}
        </div>
        <Link href="/programs">
          <ButtonBento>Browse Programs Now</ButtonBento>
        </Link>
      </div>
    </section>
  );
}
