import { BlueButton } from 'components/buttons';

export default function About() {
  return (
    <section className="lg:px-42 lg:py-42 flex h-auto bg-white px-4 py-32 text-[#232323] sm:px-8 md:px-12 md:py-32">
      <div className="flex w-full flex-col gap-12 lg:flex-row">
        <div className="flex flex-col justify-center gap-4 lg:flex-1 lg:gap-8">
          <h2 className="w-5/6">
            Experience the Difference: <br /> Tailored Guidance from Zack Hazlett, Your Fitness &
            Nutrition Expert
          </h2>
          <div className="flex flex-col items-start gap-8">
            <p className="text-body w-5/6">
              Unlock your fitness potential with Zack's expertly designed courses, available for
              immediate download. Each program is crafted from his wealth of knowledge as a seasoned
              personal trainer.
            </p>
            <div className="w-full md:w-1/2">
              <BlueButton noIcon href="/about">
                About Zack
              </BlueButton>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <video width="400" height="240" muted controls={false} loop playsInline autoPlay={true}>
            <source src="./hazlett-main-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
