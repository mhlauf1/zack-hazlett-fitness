type SectionLabelProps = {
  text: string;
  light?: boolean;
};

const SectionLabel: React.FC<SectionLabelProps> = ({ text, light }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-2 rounded-full bg-blue-500" />
      <span
        className={light ? 'text-xl text-white lg:text-2xl' : 'text-xl text-[#232323] lg:text-2xl'}
      >
        {text}
      </span>
    </div>
  );
};

export default SectionLabel;
