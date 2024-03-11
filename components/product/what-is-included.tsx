'use client';
import { ProgramType } from 'lib/shopify/types';
import type { FunctionComponent } from 'react';

type WhatIsIncludedProps = {
  program: ProgramType;
  small?: boolean;
};

export const WhatIsIncluded: FunctionComponent<WhatIsIncludedProps> = ({ program, small }) => {
  return (
    <div>
      <p className="mb-4">What&#39;s Included:</p>
      <ul className="mb-6 grid grid-cols-1 gap-4 gap-x-8 md:grid-cols-2">
        {program.metafields?.map((metafield: { value: any }) => {
          const includedItems = JSON.parse(metafield.value).included;
          return includedItems.map((item: string) => (
            <li key={item} className="flex items-start gap-2">
              <div style={{ marginTop: 6 }} className="h-1 w-1 rounded-full bg-neutral-300" />
              <p className={small ? `text-body-small` : `text-body`}>{item}</p>
            </li>
          ));
        })}
      </ul>
    </div>
  );
};
