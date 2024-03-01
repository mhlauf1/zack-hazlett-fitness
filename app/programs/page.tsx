import { AllProductsList } from 'app/ui/programs/all-products-list';
import { SubPageHeader } from 'components/subpage-header';
export const runtime = 'edge';

export const metadata = {
  title: 'Programs',
  description: 'Browse list of programs in the store.'
};

export default async function ProgramsPage() {
  return (
    <div className="mx-auto pt-[8vh]">
      <div className="bg-white px-8 py-8 md:px-20">
        <SubPageHeader text="Programs" />
        <h2>Explore Programs</h2>
      </div>
      <div className="mb-16 mt-4 grid grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-3">
        <AllProductsList />
      </div>
    </div>
  );
}
