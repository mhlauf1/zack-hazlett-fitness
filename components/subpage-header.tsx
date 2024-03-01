type SubPageHeaderProps = {
  text: string;
};

export const SubPageHeader: React.FC<SubPageHeaderProps> = ({ text }) => {
  return (
    <div className="mb-4 flex gap-2">
      <span className="light-grey-text">Home</span>
      <span className="light-grey-text">/</span>
      <span className="text-body-small">{text}</span>
    </div>
  );
};
