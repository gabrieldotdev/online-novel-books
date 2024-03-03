import { GeistSans } from 'geist/font/sans';
import { Inter as FontSans } from 'next/font/google';

export const geistSans = GeistSans;

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
