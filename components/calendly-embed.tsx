'use client';
import { useEffect } from 'react';

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    if (head) {
      head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ width: '100%', height: '80vh' }}
    ></div>
  );
};

export default CalendlyEmbed;
