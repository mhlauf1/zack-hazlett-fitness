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
      <div className="mx-auto pt-[8vh]">
        <div className="bg-white px-8 py-8">
          <SubPageHeader text="Personal Training" />
        </div>
        <div className="flex justify-between">
          <CalendlyEmbed url="https://calendly.com/mhlauf1" />
        </div>
      </div>
      <Footer />
    </>
  );
}
