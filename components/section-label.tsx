export default function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-2 rounded-full bg-[#008FED]" />
      <span className="text-lg">{text}</span>
    </div>
  );
}
