import { fetchArticle } from "@/queries/queries";
import { notFound } from "next/navigation";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import { Sidebar } from "@/components/Sidebar";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import { SidebarBox } from "@/components/SidebarBox";
import CommentList from "@/components/articlepage/CommentList";
import { Suspense } from "react";
import LoadingIndicator from "@/components/LoadingIndicator";
import RelatedArticlesSlider from "@/app/articles/[articleId]/RelatedArticlesSlider";

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

  console.log("ARTICLE ID", articleId);

  // const articleId = (await params).articleId;

  const article = await fetchArticle(articleId);

  if (!article) {
    return notFound();
  }

  return (
    <main>
      <ArticleBanner article={article} />
      <TwoColumnLayout
        sidebar={
          <Sidebar>
            <SidebarBox title={"Related Articles"}>
              <RelatedArticlesSlider />
            </SidebarBox>
            <SidebarBox title={"Kommentare"}>
              <Suspense
                fallback={
                  <LoadingIndicator>Kommentare werden gelesen</LoadingIndicator>
                }
              >
                <CommentList articleId={articleId} />
              </Suspense>
            </SidebarBox>
          </Sidebar>
        }
      >
        <ArticleBody body={article.body} />
      </TwoColumnLayout>
    </main>
  );
}
