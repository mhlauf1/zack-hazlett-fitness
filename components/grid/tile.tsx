import clsx from 'clsx';
import Image from 'next/image';

const Tags = ({ tag }: { tag: string }) => (
  <div className="absolute right-0 top-0 z-20 px-4 py-4">
    <h1 className="text-white">{tag}</h1>
  </div>
);

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  tags,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  tags: any;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-md border bg-white hover:border-blue-600 dark:bg-black',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active
        }
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
          })}
          {...props}
        />
      ) : null}
      {/* {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null} */}
      {tags && tags.map((tag: string) => <Tags tag={tag} />)}
    </div>
  );
}
