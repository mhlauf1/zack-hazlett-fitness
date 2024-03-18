import { MdStarRate } from 'react-icons/md';

const quotes = [
  {
    id: 1,
    text: "'Transformed my life in weeks—amazing!'"
  },
  {
    id: 2,
    text: "'“Expert coaching, lasting results, truly exceptional.”'"
  },
  {
    id: 3,
    text: "'“Personalized approach with real, visible results.”'"
  }
];

const Stars = () => (
  <div className="mb-2 flex gap-1">
    <MdStarRate className="text-yellow-400" />
    <MdStarRate className="text-yellow-400" />
    <MdStarRate className="text-yellow-400" />
    <MdStarRate className="text-yellow-400" />
    <MdStarRate className="text-yellow-400" />
  </div>
);

const Testimonial = ({ text }: { text: string }) => (
  <div className="flex flex-col items-center gap-2 lg:gap-6">
    <Stars />
    <div>
      <p style={{ lineHeight: '130%' }} className="text-body w-[24ch] text-center font-semibold">
        {text}
      </p>
    </div>
  </div>
);

export default function HeroTestimonials() {
  return (
    <div className="gird-cols-1 hidden w-full items-center justify-center gap-y-8 lg:grid lg:grid-cols-3 lg:justify-between lg:gap-0">
      {quotes.map((quote) => (
        <div key={quote.id}>
          <Testimonial text={quote.text} />
        </div>
      ))}
    </div>
  );
}
