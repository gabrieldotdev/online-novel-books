import { Book } from "@/components/visuals/book";

export function ElItem({ item }) {
  return <Book src={item.image} />;
}
