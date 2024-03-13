import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = `${currentYear}`;
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="mx-6 mb-4 py-4 text-sm text-neutral-500 lg:py-0 ">
      <div className="text-sm">
        <div className="mx-auto flex flex-col items-center justify-between md:flex-row">
          <p style={{ lineHeight: '145%' }} className="text-footer">
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All Rights Reserved.
          </p>
          <ul className="flex items-center gap-3 lg:items-start">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link href={item.path} className="text-footer">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex">
            <p className="text-footer">Powered by MLP</p>
            <hr className="mx-4 inline-block h-4 w-[1px] border-l border-neutral-300" />
            <p className="text-footer">Designed in Chicago</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
