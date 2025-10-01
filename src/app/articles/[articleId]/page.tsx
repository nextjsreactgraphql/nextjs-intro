// @GetMapping("/articles/{articleId}")

import { notFound } from "next/navigation";

import RelatedArticleCard from "@/app/articles/[articleId]/RelatedArticleCard";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import { fetchArticle, fetchRelatedArticles } from "@/queries/queries";
import { use } from "react";
import ThemeContextProvider, { ThemeContext } from "@/app/articles/[articleId]/ThemeContext";

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

  // Request Wasserfall
  const relatedArticles = fetchRelatedArticles(articleId)
    .then(relatedArticles => relatedArticles.map(
      a => <RelatedArticleCard key={a.id} relatedArticle={a} />
    ))


  const article = await fetchArticle(articleId);

  if (!article) {
    throw notFound();
  }

  const theme = "dark"
  const lang = "de"
  
  return <ThemeContextProvider>
    <main>
    <ArticleBanner article={article} />
    {/*<TwoColumnArticleLayout article={article} theme={theme} />*/}

    <TwoColumnLayout>
      <ArticleBody body={article.body} />
    </TwoColumnLayout>
  </main>
  </ThemeContextProvider>

  // ....

}
// ---------------------------
// "use client"
function TwoColumnArticleLayout({lang}: any) {

  const themeContext = use(ThemeContext);

  themeContext.

  return <ArticleBody body={"..."} theme={theme} lang={lang} />
}