import { notFound } from "next/navigation";

/**
 * "server-only" guarantees any modules that import code in file
 * will never run on the client. Even though this particular api
 * doesn't currently use sensitive environment variables, it's
 * good practise to add "server-only" preemptively.
 */
import "server-only";

export async function getBooks() {
  const res = await fetch("https://661662d5b8b8e32ffc7d5027.mockapi.io/books");

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const books = await res.json();

  if (books.length === 0) {
    notFound();
  }

  return books;
}
