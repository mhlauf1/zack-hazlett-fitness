import { getMenu } from 'lib/shopify';
const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = `${currentYear}`;
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-4 pt-16 sm:pb-8 sm:pt-24 lg:px-8">
        <nav
          className="-mb-6 sm:flex sm:justify-center sm:space-x-12 md:columns-2"
          aria-label="Footer"
        >
          <div className="pb-2 md:pb-6">
            <a href="/" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
              Home
            </a>
          </div>
          {menu.map((item) => (
            <div key={item.title} className="pb-2 md:pb-6">
              <a href={item.path} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        {/* <div className="mt-10 flex justify-center space-x-10">
            {menu.map((item) => (
              <a key={item.title} href={item.path} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.title}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div> */}
        <p className="mt-12 px-8 text-center text-xs leading-5 text-gray-400 md:px-0">
          &copy; {copyrightDate} {copyrightName}
          {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All Rights Reserved.
        </p>
        <p className="mt-1 px-8 text-center text-xs leading-5 text-gray-400 md:px-0">
          Powered by Lauf.
        </p>
      </div>
    </footer>
  );
}
