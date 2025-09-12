import { fetchArticle, fetchRelatedArticles } from "@/queries/queries";
import { notFound, redirect } from "next/navigation";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import RelatedArticleSlider from "@/app/articles/[articleId]/RelatedArticleSlider";
import RelatedArticleCard from "@/app/articles/[articleId]/RelatedArticleCard";
import { Suspense } from "react";
import LoadingIndicator from "@/components/LoadingIndicator";

type ArticlePageProps = {
  params: Promise<{
    articleId: string;
  }>;
};

// export async function generateStaticParams() {
//
//   return [
//     {articleId: "A_1"},
//     {articleId: "A_2"}
//   ]
// }

export default async function ArticlePage(props: ArticlePageProps) {
  const { articleId } = await props.params;

  console.log("RENDERING ArticlePage ", new Date().toISOString(), articleId);

  // const params = await props.params;
  // const articleId = params.articleId;

  /*

  query {
    article(articleId: "a-1") {
      id
      title
      body
    }

    relatedArticles(articleId: "a-1") @defer {
      id
      title
    }
  }


   */

  const relatedArticles = fetchRelatedArticles(articleId);

  const article = await fetchArticle(articleId);

  const relatedArticleCards = relatedArticles.then((r) =>
    r.map((relatedArticle) => (
      <RelatedArticleCard
        key={relatedArticle.id}
        relatedArticle={relatedArticle}
      />
    )),
  );

  if (!article) {
    return notFound();
  }

  // Suspense

  return (
    <main>
      <ArticleBanner article={article} />
      <Suspense fallback={<LoadingIndicator />}>
        <RelatedArticleSlider relatedArticles={relatedArticleCards} />
      </Suspense>
      <ArticleBody body={article.body} />
    </main>
  );
}
