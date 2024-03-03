import { ModelToggle } from '@/components/model-toggle';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="group fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold group-hover:animate-jump">
            lilwxs/hoangthaininh
          </code>
        </p>
        <ModelToggle />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none w-28 flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              style={{ width: 'auto', height: 'auto' }}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <p className="fixed right-0 bottom-0 flex w-full justify-center border-t border-gray-300 bg-gradient-to-t from-zinc-200 pt-6 pb-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Powered by&nbsp; Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Velit voluptates consequatur repellendus a cum aliquid
        consequuntur corrupti totam atque laborum. Ipsum necessitatibus saepe
        atque expedita itaque minus odio dolor culpa!
      </p>
    </main>
  );
}
