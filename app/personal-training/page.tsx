import CalendlyEmbed from 'components/calendly-embed';
import Footer from 'components/layout/footer';
import { SubPageHeader } from 'components/subpage-header';

export const runtime = 'edge';

export const metadata = {
  title: 'Programs',
  description: 'Browse list of programs in the store.'
};

export default async function PersonalTrainingPage() {
  return (
    <>
      <div className="mx-auto pt-[7vh]">
        <div className="bg-white px-8 pb-8 pt-4">
          <SubPageHeader text="Personal Training" />
          <h2>Personal Training</h2>
        </div>
        <div className="flex justify-between">
          <CalendlyEmbed url="https://calendly.com/mhlauf1" />
        </div>
      </div>
      <Footer />
    </>
  );
}
