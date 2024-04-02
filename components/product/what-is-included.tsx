import type { FunctionComponent } from 'react';

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
      <div className="prose prose-sm mt-4 text-gray-500">
        <ul role="list">
          {includedItems?.map((item: any, index: any) => (
            <li className="font-inter" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
