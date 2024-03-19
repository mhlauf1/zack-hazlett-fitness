import type { FunctionComponent } from 'react';
import { IoMdArrowForward } from 'react-icons/io';

type WhatIsIncludedProps = {
  program: any;
  small?: boolean;
};

export const WhatIsIncluded: FunctionComponent<WhatIsIncludedProps> = ({ program, small }) => {
  let includedItems = program.metafields.find(
    (metafield: any) => metafield.key === 'program_includes'
  )?.value;
  includedItems = JSON.parse(includedItems);

  return (
    <div>
      <h4 className="font-inter mb-4 text-lg lg:text-xl">What&#39;s Included:</h4>
      <ul className="mx-4 grid grid-cols-1 gap-4 md:grid-cols-1 lg:mx-8">
        {includedItems?.map((item: any, index: any) => (
          <li key={index} className="flex items-start gap-2">
            <IoMdArrowForward className="mt-2" />
            <p style={{ fontSize: 18 }} className="text-body">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
