import Button from 'components/button';

export default function CtaBanner() {
  return (
    <section className="mt-48 flex h-auto flex-col items-center bg-white px-4 py-[84px] sm:px-8 md:px-12 lg:mt-72 lg:px-16">
      <h2 className="mb-6 text-2xl text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
        Not sure where to begin?
      </h2>
      <p className="mb-10 w-4/5 text-center text-gray-900">
        Download a free, beginner friendly workout to kickstart your journey
      </p>
      <Button href="/">Let's start today</Button>
    </section>
  );
}
