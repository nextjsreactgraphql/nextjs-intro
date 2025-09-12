"use server";

import { mutateArticleLikes } from "@/queries/queries";
import { revalidatePath } from "next/cache";

export async function sayHello(name: string) {
  return "Hallo " + name;
}

export async function likeArticle(articleId: string) {
  console.log("LIKE ", articleId);
  await mutateArticleLikes(articleId);

  revalidatePath("/articles")
  revalidatePath("/articles/" + articleId);
}