import { BadgeDollarSign, Box, Bug, History } from 'lucide-react';

export const siteConfig = {
  name: 'VibeVerse',
  description: 'VibeVerse is a social media platform for music lovers.',
  navLeftLinks: [
    {
      label: 'Kids',
      path: '/',
    },
    {
      label: 'New',
      path: '/new',
    },
    {
      label: 'Popular',
      path: '/popular',
    },
    {
      label: 'Controversial',
      path: '/controversial',
    },
    {
      label: 'Top',
      path: '/top',
    },
    {
      label: 'Saved',
      path: '/saved',
    },
  ],
  navRightLinks: [
    {
      icon: <BadgeDollarSign />,
      label: 'Premium Plans',
      path: '/premium',
    },
    {
      icon: <Box />,
      label: 'Box Office',
      path: '/boxoffice',
    },
    {
      icon: <History />,
      label: 'History',
      path: '/history',
    },
    {
      icon: <Bug />,
      label: 'Report',
      path: '/report',
    },
  ],
  footerLinks: [
    {
      label: 'Privacy',
      path: '/privacy',
    },
    {
      label: 'Terms',
      path: '/terms',
    },
  ],
};
