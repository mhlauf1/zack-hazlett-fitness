import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = `${currentYear}`;
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="flex flex-col border-t border-neutral-200 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4 border-r border-neutral-200 px-12 py-4 lg:gap-12 lg:py-16">
          <div className="hidden items-end justify-between lg:flex">
            <span className="text-brand">Menu</span>
            <span className="text-brand">Hazlett</span>
          </div>
          <ul className="flex flex-col items-center gap-2 lg:items-start">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link href={item.path} className="footer-large-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {menu.length ? <ul className="hidden gap-6 text-sm md:flex md:items-center"></ul> : null}
        <div className="flex flex-col items-center gap-2 border-t border-neutral-200 px-12 py-4 lg:items-start lg:gap-12 lg:border-r lg:py-16">
          <span className="text-brand">Featured Programs</span>
          <ul className="flex flex-col items-center gap-1 lg:items-start">
            <li>90 Day Body Blast</li>
            <li>Personal Training</li>
            <li>Endurance Imporvement</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2 border-t border-neutral-200 px-12 py-4 lg:items-start lg:gap-12 lg:border-r lg:py-16">
          <span className="text-brand">Additional Information</span>
          <ul className="flex flex-col items-center gap-2 lg:items-start">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-2 border-t border-neutral-200 px-12 py-4 lg:items-start lg:gap-12 lg:border-r lg:py-16">
          <span className="text-brand">Contact</span>
          <ul className="flex flex-col items-center gap-2 lg:items-start">
            <li>zackhazlett@gmail.com</li>
            <li>614-145-24322</li>
            <li>Columbus, OH</li>
          </ul>
        </div>
      </div>

      <div className="relative h-[350px]">
        <Image style={{ objectFit: 'cover' }} src="/running-1.png" fill alt="Footer" />
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p className="text-footer">
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <p className="flex md:ml-auto">
            <p className="text-footer">Powered by MLP</p>
            <hr className="mx-4 inline-block h-4 w-[1px] border-l border-neutral-300" />
            <p className="text-footer">Designed in Chicago</p>
          </p>
        </div>
      </div>
    </footer>
  );
}
