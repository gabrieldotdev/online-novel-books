import { notFound } from "next/navigation";

/**
 * "server-only" guarantees any modules that import code in file
 * will never run on the client. Even though this particular api
 * doesn't currently use sensitive environment variables, it's
 * good practise to add "server-only" preemptively.
 */
import "server-only";

export async function getCategories({ parent } = {}) {
  const res = await fetch(`https://app-playground-api.vercel.app/api/categories${parent ? `?parent=${parent}` : ""}`);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const categories = await res.json();

  if (categories.length === 0) {
    notFound();
  }

  return categories;
}

export async function getCategory({ slug }) {
  const res = await fetch(`https://app-playground-api.vercel.app/api/categories${slug ? `?slug=${slug}` : ""}`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error("Something went wrong!");
  }

  const category = await res.json();

  if (!category) {
    notFound();
  }

  return category;
}