import { fetchArticle } from "@/queries/queries";
import { notFound } from "next/navigation";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";

// export function generateStaticParams() {
//   console.log("Generating Static Params");
//   return [{ articleId: "A_1" }, { articleId: "A_2" }, { articleId: "A_3" }];
// }

type ArticlePageProps = {
  // params: Promise<Record<string, string>>
  params: Promise<{ articleId: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  console.log("ArticlePage  rendered at", new Date().toISOString());

  // const p = await params;
  const { articleId } = await params;

  // const articleId = (await params).articleId;

  const article = await fetchArticle(articleId);

  if (!article) {
    return notFound();
  }

  return (
    <main>
      <ArticleBanner article={article} />
      <ArticleBody body={article.body} />
    </main>
  );
}
