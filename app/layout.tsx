import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { ensureStartsWith } from 'lib/utils';
import { DM_Sans, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmSans'
});
const customGrotesque = localFont({ src: '../fonts/ClashDisplay-Variable.ttf' });
const nohemi = localFont({ src: '../fonts/Nohemi-VF.ttf' });

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${customGrotesque.className} ${nohemi.className} ${dmSans.className}  ${inter.variable}`}
    >
      <body className="flex min-h-[100vh] flex-col  bg-white text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
