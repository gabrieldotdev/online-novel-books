import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/primitives/accordion";

export function ContentItem({ items }) {
  return (
    <Accordion type="single" collapsible defaultValue="free" className="w-full space-y-4">
      <AccordionItem value="free">
        <AccordionTrigger>正文卷·共126章</AccordionTrigger>
        <AccordionContent>
          <section className="grid grid-cols-3 gap-2 mt-2 w-full">
            {Array.from({ length: 126 }).map((_, index) => (
              <Link key={index} href="/chapter/1" className="flex items-center rounded-md hover:bg-order h-8 px-4">
                <p className="font-medium truncate">{index + 1}/ 章 一切从这里开始 一切从这里开始 一切从这里开始</p>
              </Link>
            ))}
          </section>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="vip-1">
        <AccordionTrigger>占领地球篇·共100章</AccordionTrigger>
        <AccordionContent>
          <section className="grid grid-cols-3 gap-2 mt-2 w-full">
            {Array.from({ length: 100 }).map((_, index) => (
              <Link key={index} href="/chapter/1" className="flex items-center rounded-md hover:bg-order h-8 px-4">
                <p className="font-medium truncate">{index + 1}/ 章 一切从这里开始 一切从这里开始 一切从这里开始</p>
              </Link>
            ))}
          </section>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="vip-2">
        <AccordionTrigger>大领主篇·共81章</AccordionTrigger>
        <AccordionContent>
          <section className="grid grid-cols-3 gap-2 mt-2 w-full">
            {Array.from({ length: 81 }).map((_, index) => (
              <Link key={index} href="/chapter/1" className="flex items-center rounded-md hover:bg-order h-8 px-4">
                <p className="font-medium truncate">{index + 1}/ 章 一切从这里开始 一切从这里开始 一切从这里开始</p>
              </Link>
            ))}
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
