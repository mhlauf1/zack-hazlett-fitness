import { PersonalTraining } from 'app/ui/home/v2';
import { AllProductsList } from 'app/ui/programs/all-products-list';
import Footer from 'components/layout/footer';
import { SubPageHeader } from 'components/subpage-header';
export const runtime = 'edge';

export const metadata = {
  title: 'Programs',
  description: 'Browse list of programs in the store.'
};

export default async function ProgramsPage() {
  return (
    <>
      <div className="mx-auto pt-[8vh]">
        <div className="bg-white px-8 py-8">
          <SubPageHeader text="Programs" />
          <h2>Explore Programs</h2>
        </div>
        <div className="flex flex-col gap-2 px-8">
          <h3 className="text-body">All Programs</h3>
          <div className="h-[1px] w-full bg-gray-300" />
        </div>
        <div className="mb-16 mt-4 grid grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-3">
          <AllProductsList />
        </div>
        <PersonalTraining />
      </div>
      <Footer />
    </>
  );
}
