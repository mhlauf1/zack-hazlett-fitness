export default function SectionHeader({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-neutral-100 bg-gradient-to-b from-neutral-100 to-neutral-200 px-6  py-2 text-sm text-[#2323239f]">
      {text}
    </span>
  );
}
