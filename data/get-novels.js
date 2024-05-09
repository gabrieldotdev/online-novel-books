import { notFound } from "next/navigation";
import { env } from "@/configs/env.mjs";

/**
 * "server-only" guarantees any modules that import code in file
 * will never run on the client. Even though this particular api
 * doesn't currently use sensitive environment variables, it's
 * good practise to add "server-only" preemptively.
 */
import "server-only";

export async function getNovels() {
  const res = await fetch("http://localhost:3001/api/novels", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await res.json();

  if (data.length === 0) {
    notFound();
  }

  return data;
}

export async function getNovelById(id) {
  // biome-ignore lint/style/useTemplate: <explanation>
  const res = await fetch(env.NEXT_PUBLIC_APP_URL + "/api/novels/" + id, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}
