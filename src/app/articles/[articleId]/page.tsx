// @GetMapping("/articles/{articleId}")

import { notFound } from "next/navigation";

import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import { fetchArticle } from "@/queries/queries";

type ArticlePageProps = {
  params: Promise<{
    articleId: string
  }>,
}

export async function generateStaticParams() {

  return [
    { articleId: "A_1"},
    { articleId: "A_2"},
    { articleId: "A_7"},
  ]

}

export default async function ArticlePage({params}: ArticlePageProps) {

  // console.log("Rendering ArticlePage", new Date().toLocaleTimeString());




  const {articleId} = await params;

  const article = await fetchArticle(articleId);

  if (!article) {
    throw notFound();
  }
  
  return <main>
    <ArticleBanner article={article} />
    <ArticleBody body={article.body} />
  </main>

  // ....

}