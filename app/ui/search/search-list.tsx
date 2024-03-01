import Image from 'next/image';
import Link from 'next/link';

export async function SearchList({ programs }: { programs: any }) {
  return (
    <>
      {programs &&
        programs.map((program) => (
          <Link
            className="relative flex flex-1 flex-col items-center rounded-lg border-2 border-neutral-200 bg-white px-8 py-6 duration-500 ease-in-out hover:border-blue-500 hover:bg-white focus:border-blue-500 focus:bg-white active:border-2 active:border-blue-500 active:bg-white"
            href={`/program/${program.handle}`}
          >
            <Image
              src={program.featuredImage?.url}
              alt={program.title}
              height={340}
              width={360}
              className="rounded-md"
            />
            <div className="mb-4 mt-6  flex  w-full items-center justify-between">
              <h3 className="text-2xl">{program.title}</h3>
              <span className="text-body">$29</span>
            </div>
            <p className="text-body">{program.description}</p>
          </Link>
        ))}
    </>
  );
}
