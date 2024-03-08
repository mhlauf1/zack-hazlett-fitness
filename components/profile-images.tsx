import { MdStarRate } from 'react-icons/md';

export default function ProfileImages() {
  return (
    <div className="flex flex-col-reverse items-start  gap-6 lg:flex-row lg:items-end">
      <div className="flex">
        <div className="h-10 w-10 rounded-full bg-gray-800 md:h-14 md:w-14" />
        <div className="ml-[-24px] h-10 w-10 rounded-full bg-gray-400 md:h-14 md:w-14" />
        <div className="ml-[-24px] h-10 w-10 rounded-full bg-gray-600 md:h-14 md:w-14" />
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
