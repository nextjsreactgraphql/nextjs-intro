"use server"; // <-- Server Function oder Server Action

// process.exit();

import { revalidatePath } from "next/cache";

import { mutateArticleLikes } from "@/queries/queries";

export async function addLike(articleId: string) {
  console.log(articleId);
  await mutateArticleLikes(articleId);

  revalidatePath(`/articles/${articleId}`)
  revalidatePath(`/articles`)

}
