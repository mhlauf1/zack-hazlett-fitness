export default function SectionHeader({ text }: { text: string }) {
  return (
    <span className="font-inter mb-8 rounded-full bg-blue-500 px-4 py-1 text-white">{text}</span>
  );
}
