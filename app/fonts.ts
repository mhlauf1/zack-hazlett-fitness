import { Darker_Grotesque, Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const headingFont = Darker_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesque',
  weight: ['300', '400', '500', '600', '700']
});
