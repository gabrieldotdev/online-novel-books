import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | ' + siteConfig.name,
  },
  description: siteConfig.description,
};

export default function DashLayout({ children }) {
  return (
    <section>
      <aside className="flex items-center gap-3 justify-center">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/account">Account</Link>
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/settings/users">Users notifications</Link>
        <Link href="/">Go to Home</Link>
      </aside>
      <main>{children}</main>
    </section>
  );
}
