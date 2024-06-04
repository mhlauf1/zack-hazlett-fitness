import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div
      style={{ borderRadius: 10 }}
      className="relative flex h-11 w-11 items-center justify-center bg-blue-500 text-white transition-colors duration-300 hover:bg-blue-400 "
    >
      <ShoppingCartIcon
        className={clsx('h-4 transition-all ease-in-out hover:scale-110 ', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-lg bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
