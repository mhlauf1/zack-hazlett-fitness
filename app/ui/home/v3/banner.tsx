import Marquee from 'react-fast-marquee';

export default function Banner() {
  return (
    <div className="mx-2 mb-8 h-[10vh] rounded-xl bg-[#f3f1ed] px-6 md:mx-4 lg:mx-6">
      <Marquee>
        <div className="flex h-[10vh] items-center justify-between gap-16 overflow-hidden md:gap-24 lg:gap-36">
          <h3 className="text-sm font-semibold uppercase text-neutral-400 lg:text-sm">
            Transform{' '}
          </h3>
          <h3 className="text-sm font-semibold uppercase text-neutral-400  lg:text-sm">
            Download Today
          </h3>
          <h3 className="text-sm font-semibold uppercase text-neutral-400  lg:text-sm">Fitness</h3>
          <h3 className="text-sm font-semibold uppercase text-neutral-400  lg:text-sm">
            Nutrition{' '}
          </h3>
          <h3 className="text-sm font-semibold uppercase text-neutral-400  lg:text-sm">
            Personal Training
          </h3>
          <h3 className="text-sm font-semibold uppercase text-neutral-400  lg:text-sm">
            Endurance
          </h3>
          <h3 className="text-sm font-semibold uppercase text-neutral-400  lg:text-sm">Nourish</h3>
          <h3 className="text-sm font-semibold uppercase text-neutral-400  lg:text-sm">Excel</h3>
          <h3 className="mr-16 text-sm font-semibold uppercase text-neutral-400 lg:mr-24  lg:text-sm">
            Zack Hazlett Fitness
          </h3>
        </div>
      </Marquee>
    </div>
  );
}
