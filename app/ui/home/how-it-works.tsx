import {
  ArrowUpOnSquareIcon,
  ClipboardIcon,
  CreditCardIcon,
  FaceSmileIcon,
  MapIcon,
  RocketLaunchIcon
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Visual Progress Tracking',
    description: 'See your improvements with clear, visual graphs as you update your achievements.',
    icon: MapIcon
  },
  {
    name: 'Supportive Community',
    description:
      'Join fellow beginners in our community space for tips, motivation, and shared success stories.',
    icon: FaceSmileIcon
  }
];
const stepData = [
  {
    title: 'Browse Programs',
    number: '01',
    description:
      "Whether you're looking to shed pounds, build muscle, or enhance endurance, you'll find a program that aligns with your personal health ambitions.",
    icon: ClipboardIcon
  },
  {
    title: 'Make Your Purchase',
    number: '02',
    description:
      "Once you've found your ideal program, secure your copy with our secure purchasing process.",
    icon: CreditCardIcon
  },
  {
    title: 'Download Your Program',
    number: '03',
    description: 'Immediately after purchase, your program becomes available for download.',
    icon: ArrowUpOnSquareIcon
  },
  {
    title: 'Get To Work',
    number: '04',
    description:
      'This digital format ensures that you can start your fitness journey right away and revisit the program whenever you need.',
    icon: RocketLaunchIcon
  }
];

const Step = ({ data }: { data: any }) => (
  <div className="mt-12 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
    {data.map((step: any) => (
      <>
        <div
          key={step.title}
          className="relative flex gap-1 rounded-xl py-3 pl-9 duration-500 ease-in-out hover:bg-gray-800"
        >
          <step.icon className="absolute left-0 top-4 h-6 w-6 text-blue-500" aria-hidden="true" />
          <div>
            <h3 className="inline text-2xl font-semibold text-white">{step.title}</h3>
            <p className="font-inter block">{step.description}</p>
          </div>
        </div>
      </>
    ))}
  </div>
);

export default function HowItWorks() {
  return (
    <section>
      <div className="overflow-hidden bg-gray-900 py-24 sm:py-48">
        <div className="mx-auto flex justify-center px-6 lg:px-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-0">
              <div className="lg:max-w-xl">
                <h2
                  style={{ letterSpacing: 0.5 }}
                  className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
                >
                  Start Today
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl">
                  <span className="text-blue-300">4 Easy Steps</span> To Start Your Health and
                  Fitness Journey
                </p>
                <Step data={stepData} />
              </div>
            </div>
            <img
              src="/running-1.png"
              alt="Product screenshot"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-white/10 md:-ml-4 md:w-[40vw] lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-64">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto flex flex-col md:max-w-4xl md:items-center md:text-center">
            <h2
              style={{ letterSpacing: 0.5 }}
              className="text-start text-lg font-semibold leading-8 tracking-tight text-blue-600"
            >
              Everything You Need
            </h2>
            <p className="new-to-programs-header mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-center">
              New To Workout Programs? <span className="block underline">No Problem.</span>
            </p>
            <p className="mt-8 text-lg leading-7 text-gray-600 md:w-4/5 md:text-center">
              Our straightforward guides in a downloadable format make tracking your progress a
              breeze. Just enter your achievements and watch yourself grow.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="/schedule-img.png"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none  lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-xl py-3 pl-9 duration-500 ease-in-out hover:bg-blue-50"
              >
                <dt className="font-inter block text-2xl font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-4 h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{' '}
                <dd className="font-inter inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
