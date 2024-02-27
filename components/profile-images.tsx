export default function ProfileImages() {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex">
        <div className="h-12 w-12 rounded-full bg-gray-800 md:h-16 md:w-16" />
        <div className="ml-[-24px] h-12 w-12 rounded-full bg-gray-400 md:h-16 md:w-16" />
        <div className="ml-[-24px] h-12 w-12 rounded-full bg-gray-600 md:h-16 md:w-16" />
      </div>
      <p className="text-body w-2/3 text-end md:w-full">Over 50+ Success Stories</p>
    </div>
  );
}
