import Image from 'next/image';
import { MdStarRate } from 'react-icons/md';

export default function HeroTestimonials() {
  return (
    <div className="flex flex-col-reverse items-start  gap-6 lg:flex-row lg:items-end">
      <div className="flex">
        <Image
          src="/client-1.png"
          width={64}
          height={64}
          alt="Client Photo"
          className="rounded-full"
        />
        <Image
          src="/client-3.png"
          width={64}
          height={64}
          alt="Client Photo"
          className="ml-[-24px] rounded-full"
        />
        <Image
          src="/client-4.png"
          width={64}
          height={64}
          alt="Client Photo"
          className="ml-[-24px] rounded-full"
        />
      </div>
      <div>
        <div className="mb-2 flex gap-1">
          <MdStarRate className="text-yellow-400" />
          <MdStarRate className="text-yellow-400" />
          <MdStarRate className="text-yellow-400" />
          <MdStarRate className="text-yellow-400" />
          <MdStarRate className="text-yellow-400" />
        </div>
        <p style={{ lineHeight: '120%' }} className="text-body">
          Over 50+ Success Stories
        </p>
      </div>
    </div>
  );
}
