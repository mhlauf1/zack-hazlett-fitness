'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { ProductVariant } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({
  availableForSale,
  selectedVariantId,
  large
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  large?: boolean;
}) {
  const { pending } = useFormStatus();
  let buttonClasses =
    'relative flex w-full items-center justify-center rounded-full duration-500  border-blue-400 bg-blue-500 text-white py-3';
  if (large) {
    buttonClasses = buttonClasses + ' py-4';
  }
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute  left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Add To Cart
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        'hover:bg-blue-400': true,
        disabledClasses: pending
      })}
    >
      <div className="absolute  left-0 ml-4">
        {pending ? <LoadingDots className="mb-3 bg-white" /> : <PlusIcon className="h-5" />}
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
  large
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  large?: boolean;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  return (
    <form action={actionWithVariant}>
      <SubmitButton
        large={large}
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
