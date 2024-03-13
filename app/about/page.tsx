export const runtime = 'edge';

export const metadata = {
  title: 'Programs',
  description: 'Browse list of programs in the store.'
};

export default async function AboutPage() {
  return (
    <>
      <div className="mx-auto pt-[8vh]">
        <div className="bg-white px-8 py-8 md:px-20">
          <div className="flex gap-2">
            <span className="light-grey-text">Home</span>
            <span className="light-grey-text">/</span>
            <span className="text-body-small">About</span>
          </div>
        </div>
        <div className="my-16 grid grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </>
  );
}
