import { Btn } from 'components/buttons';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
      <div className="mx-auto justify-around px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto flex flex-1 flex-col  justify-between lg:mx-0 lg:max-w-4xl lg:flex-shrink-0 lg:pt-8">
          <div>
            <div className="mt-12 lg:mt-16">
              <span className="font-inter rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                Personal Training Available
              </span>
            </div>
            <h1 className="font-nohemi mt-10 text-4xl font-semibold capitalize tracking-tight text-gray-900 md:text-5xl lg:text-7xl">
              Download your ultimate fitness blueprint today.
            </h1>
            <p className="lg mt-6 w-full text-xl leading-8 text-gray-600 sm:w-4/5  lg:w-2/3">
              Get access to exclusive fitness regimes and nutritional guides, all under the guidance
              of our seasoned instructor.
            </p>
          </div>
          <div>
            <div className="mt-8 flex items-center gap-x-4">
              <Btn href="/programs">Get Started Now</Btn>
              <Btn dark href="/personal-training">
                Book A Consultation
              </Btn>
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-3xl flex-none sm:max-w-5xl lg:mt-0 lg:max-w-none">
          <img
            src="./zh-asset.webp"
            alt="App screenshot"
            width={500}
            height={700}
            className="w-full rounded-xl object-cover shadow-2xl ring-1 ring-gray-900/10 lg:max-w-[40vw]"
          />
        </div>
      </div>
    </div>
  );
}
