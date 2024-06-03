'use client';
import { Element } from 'react-scroll';

export default function ComingSoon() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="lg:aspect-square h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:h-auto lg:max-w-sm"
              src="./sign-up.jpg"
              alt="Sign Up"
            />
            <div className="w-full flex-auto">
              <h2 className="font-inter text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                New Programs Coming Soon
              </h2>
              <p className="mt-4 text-lg leading-7 text-gray-300">
                Sign up to get notified when new fitness and nutrition courses are added to the
                collection.
              </p>
              <Element name="getAlertSignUp">
                <div className="mt-6">
                  <form className="mt-6 sm:flex sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      required
                      className="tex-sm font-inter w-full rounded-full px-6 py-3"
                      placeholder="Enter your email"
                    />
                    <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </Element>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4686e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
