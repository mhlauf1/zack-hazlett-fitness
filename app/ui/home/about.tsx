import { Btn } from 'components/buttons';
import { getAboutPhotos } from 'lib/contentful';

type AboutImageProps = {
  url: string;
  alt: string;
};

const AboutImage = ({ url, alt }: AboutImageProps) => (
  <div className="relative">
    <img
      src={url}
      alt={alt}
      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
    />
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
  </div>
);

export default async function About() {
  const aboutPhotos = await getAboutPhotos();
  // Add a null check for aboutPhotos and its properties
  if (!aboutPhotos || !aboutPhotos.aboutImagesCollection) {
    return <div>Loading About Images</div>;
  }

  const photos = aboutPhotos.aboutImagesCollection.items;

  return (
    <div className="relative isolate">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div className="overflow-hidden">
        <div className="mx-auto px-6 pb-32 pt-16 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl justify-around gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:shrink-0 xl:max-w-3xl">
              <h2
                style={{ letterSpacing: 0.5 }}
                className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
              >
                Learn about Zack
              </h2>
              <p className="font-inter mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-5xl lg:text-6xl">
                Experience The Difference
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                Unlock your fitness potential with Zack's expertly designed courses, available for
                immediate download. Each program is crafted from his wealth of knowledge as a
                seasoned personal trainer.
              </p>
              <div className="mt-8 flex items-center gap-x-4 md:mt-4">
                <Btn href="/about">About Zack</Btn>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <AboutImage url={photos[0].url} alt={photos[0].description} />
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <AboutImage url={photos[1].url} alt={photos[1].description} />
                <AboutImage url={photos[2].url} alt={photos[2].description} />
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <AboutImage url={photos[3].url} alt={photos[3].description} />
                <AboutImage url={photos[4].url} alt={photos[4].description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
