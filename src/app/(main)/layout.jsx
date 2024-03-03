import { Header } from '@/components/header';

export default function MainLayout({ children }) {
  return (
    <section className="min-h-screen">
      {/* <HeaderVisible /> */}
      <Header />
      <main className="flex flex-col items-center justify-between p-24">
        {children}
      </main>
    </section>
  );
}
