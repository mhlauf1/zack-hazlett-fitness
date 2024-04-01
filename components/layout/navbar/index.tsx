import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  const mobileMenu = await getMenu('next-js-frontend-header-mobile-menu');

  return (
    <nav className="fixed top-0 z-50 flex h-[10vh] w-full items-center justify-between bg-white p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={mobileMenu} />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center text-[#232323] md:mr-6 md:w-auto lg:mr-12"
          >
            <div
              style={{ letterSpacing: 3 }}
              className="ml-2 hidden flex-none text-sm font-medium  uppercase md:block lg:ml-4"
            >
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <div className="flex gap-8">
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="nav-link  underline-offset-4 duration-300 ease-in-out"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
