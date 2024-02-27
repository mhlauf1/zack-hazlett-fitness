import Button from 'components/button';

export default function About() {
  return (
    <section className="flex h-auto px-4 pt-32 text-[#232323] sm:px-8 md:px-12 md:pt-48 lg:px-48 lg:pt-72">
      <div className="flex w-full flex-col gap-12 lg:flex-row">
        <div className="flex flex-1 flex-col justify-between ">
          <h2 className="w-[19ch] text-5xl">
            Experience the Difference: Tailored Guidance from Zack Hazlett, Your Fitness & Nutrition
            Expert
          </h2>
          <div className="flex flex-col items-start gap-8">
            <p className="w-[37ch]">
              Unlock your fitness potential with Zack's expertly designed courses, available for
              immediate download. Each program is crafted from his wealth of knowledge as a seasoned
              personal trainer.
            </p>
            <Button fill href="/">
              Learn More About Zack
            </Button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <iframe src="./hazlett-main-video.mp4" width={400} height={695} />
        </div>
      </div>
    </section>
  );
}
