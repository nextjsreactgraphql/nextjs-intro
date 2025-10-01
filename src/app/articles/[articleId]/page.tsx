// @GetMapping("/articles/{articleId}")

import { notFound } from "next/navigation";
import { Suspense } from "react";

import MyArticleSliderDemo from "@/app/articles/[articleId]/MyArticleSliderDemo";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import CommentList from "@/components/articlepage/CommentList";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Sidebar } from "@/components/Sidebar";
import { SidebarBox } from "@/components/SidebarBox";
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
    <TwoColumnLayout sidebar={<Sidebar>
      <SidebarBox title={"Related Articles"}>

        <MyArticleSliderDemo title={"Zähler"} initialValue={200}/>

      </SidebarBox>
      <SidebarBox title={"Kommentare"}>
        <Suspense fallback={<LoadingIndicator />}>
          <CommentList articleId={article.id} />
        </Suspense>
      </SidebarBox>
    </Sidebar>}>
      <ArticleBody body={article.body} />
    </TwoColumnLayout>
  </main>

  // ....

}