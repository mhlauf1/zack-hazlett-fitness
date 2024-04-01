export default function SectionHeader({ text }: { text: string }) {
  return (
    <span className="font-inter mb-4 rounded-full bg-gradient-to-t from-blue-500 to-blue-400   px-4 py-1 text-white lg:mb-8">
      {text}
    </span>
  );
}
