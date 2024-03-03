import { Bug, Search } from 'lucide-react';

const MENU = [
  {
    label: 'Dashboard',
    icon: <Bug />,
    path: '/dashboard',
  },
  {
    label: 'Permission',
    icon: <Search />,
    path: '/permission',
    children: [
      {
        label: 'Route Permission',
        path: '/permission/route',
      },
    ],
  },
];

const SEO = {
  title: 'Nextjs Core Project',
  description: 'Nextjs Core Project by TruongDN',
  titleTemplate: '%s | Nextjs Core Project',
  defaultOpenGraphImageHeight: 1200,
  defaultOpenGraphImageWidth: 630,
  openGraph: {
    type: 'website',
    locale: 'en',
    url: env.NEXT_PUBLIC_BASE_URL,
    siteName: 'Nextjs Core Project',
    title: 'Nextjs Core Project',
    description: 'Nextjs Core Project by TruongDN',
    images: [
      // {
      //   url: '',
      //   width: 828,
      //   height: 315,
      //   alt: '',
      // },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export { MENU, SEO };
