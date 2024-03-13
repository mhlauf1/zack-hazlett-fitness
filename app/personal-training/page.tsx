import CalendlyEmbed from 'components/calendly-embed';
import { SubPageHeader } from 'components/subpage-header';
import { Suspense } from 'react';
export const runtime = 'edge';

export const metadata = {
  title: 'Programs',
  description: 'Browse list of programs in the store.'
};

const Loading = () => <p>Loading....</p>;

export default async function PersonalTrainingPage() {
  return (
    <>
      <div className="mx-auto pt-[8vh]">
        <div className="bg-white px-8 pb-8 pt-4">
          <SubPageHeader text="Personal Training" />
          <h2>One on One Coaching</h2>
        </div>
        <section className="mx-2 mb-8 flex h-auto flex-col gap-2 bg-white text-[#232323] md:mx-4 lg:mx-6 lg:mb-24 lg:flex-row">
          <div className="flex w-full flex-col items-start rounded-xl  px-8 py-8 duration-500  lg:w-3/5">
            <h3 className="mb-4 mt-8 w-full md:w-3/4 lg:mb-6 lg:mt-12 lg:w-[27ch]">
              Let's Work Together
            </h3>
            <div className="flex w-4/5 flex-col gap-4">
              <p className="text-body leading-loose	">
                <b>Customized Training Plans:</b> Receive a tailored workout program that evolves
                weekly, ensuring it aligns perfectly with your ongoing progress and fitness goals.
              </p>
              <p className="text-body leading-loose	">
                <b>Weekly Consultations:</b> Engage in regular check-in calls focused on discussing
                your training achievements, dietary habits, and the balance between fitness and
                personal life.
              </p>
              <p className="text-body leading-loose	">
                <b>Direct Coach Communication:</b> Gain unrestricted access to your coach through
                direct phone contact for any immediate queries or guidance you need throughout your
                fitness journey.
              </p>
            </div>
          </div>
          <div className="relative hidden rounded-xl  lg:flex lg:w-2/5 lg:flex-1">
            <Suspense fallback={<Loading />}>
              <CalendlyEmbed url="https://calendly.com/mhlauf1" />
            </Suspense>
          </div>
          <div className="relative flex rounded-xl border border-neutral-200 lg:hidden lg:w-2/5 lg:flex-1">
            <CalendlyEmbed url="https://calendly.com/mhlauf1" />
          </div>
        </section>
      </div>
    </>
  );
}
