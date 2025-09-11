import { fetchArticle } from "@/queries/queries";
import { notFound, redirect } from "next/navigation";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";

type ArticlePageProps = {
  params: Promise<{
    articleId: string
  }>
}

// export async function generateStaticParams() {
//
//   return [
//     {articleId: "A_1"},
//     {articleId: "A_2"}
//   ]
// }

export default async function ArticlePage(props: ArticlePageProps) {

  const {articleId} = await props.params;

  console.log("RENDERING ArticlePage ", new Date().toISOString(), articleId)


  // const params = await props.params;
  // const articleId = params.articleId;

  const article = await fetchArticle(articleId);

  if (!article) {
    return notFound();
  }


  return <main>
    <ArticleBanner article={article} />
    <ArticleBody body={article.body} />
  </main>;

}