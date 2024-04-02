import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import CalendlyEmbed from 'components/calendly-embed';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  title: 'Programs',
  description: 'Browse list of programs in the store.'
};

const features = [
  {
    name: 'Customized Training Plans',
    description:
      'Receive a tailored workout program that evolves weekly, ensuring it aligns perfectly with your ongoing progress and fitness goals.',
    icon: InboxIcon
  },
  {
    name: 'Direct Coach Communication',
    description:
      'Gain unrestricted access to your coach through direct phone contact for any immediate queries or guidance you need throughout your fitness journey.',
    icon: TrashIcon
  },
  {
    name: 'Weekly Consultations',
    description:
      'Engage in regular check-in calls focused on discussing your training achievements, dietary habits, and the balance between fitness and personal life.',
    icon: UsersIcon
  }
];

const Loading = () => <p>Loading....</p>;

export default async function PersonalTrainingPage() {
  return (
    <div>
      <div className="relative isolate pt-14">
        <svg
          className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] md:block"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
        <div className="py-12 md:py-24 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                style={{ letterSpacing: 0.5 }}
                className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
              >
                Let's Work Together
              </h2>
              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                One on One Coaching
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
            <div className="mx-auto mt-16  sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Suspense fallback={<Loading />}>
                  <CalendlyEmbed url="https://calendly.com/mhlauf1" />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
