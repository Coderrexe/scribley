"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function generateEmbeddings(docId: string) {
  await auth.protect();

  // turn a PDF into vector embeddings
  // await generateEmbeddingsInPineconeVectorStore(docId);

  revalidatePath("/dashboard");

  return { complete: true };
}
