import { getMenu } from 'lib/shopify';
import Link from 'next/link';
const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = `${currentYear}`;
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200';
  let menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  menu = menu.filter((item) => item.path !== '/personal-training');
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-4 pt-16 sm:pb-8 sm:pt-24 lg:px-8">
        <nav
          className="-mb-6 sm:flex sm:justify-center sm:space-x-12 md:columns-2"
          aria-label="Footer"
        >
          <div className="flex justify-center gap-8 pb-2 md:pb-6">
            <Link
              href="/"
              className="cursor-pointer text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="cursor-pointer text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Programs
            </Link>
            <Link
              href="/programs"
              className="cursor-pointer text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
          </div>
        </nav>
        <p className="mt-12 text-center text-xs leading-5 text-gray-400 md:px-0 md:px-8">
          &copy; {copyrightDate} {copyrightName}
          {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All Rights Reserved.
        </p>
        <p className="mt-1 px-8 text-center text-xs leading-5 text-gray-400 md:px-0">
          Powered by Michael Laufersweiler.
        </p>
      </div>
    </footer>
  );
}
