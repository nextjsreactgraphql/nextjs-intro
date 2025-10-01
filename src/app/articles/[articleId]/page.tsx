// @GetMapping("/articles/{articleId}")

import { notFound } from "next/navigation";
import { ReactNode, Suspense } from "react";

import RelatedArticleCard from "@/app/articles/[articleId]/RelatedArticleCard";
import RelatedArticleSlider from "@/app/articles/[articleId]/RelatedArticleSlider";
import { ArticleBanner } from "@/components/articlepage/ArticleBanner";
import ArticleBody from "@/components/articlepage/ArticleBody";
import CommentList from "@/components/articlepage/CommentList";
import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Sidebar } from "@/components/Sidebar";
import { SidebarBox } from "@/components/SidebarBox";
import { fetchArticle, fetchRelatedArticles } from "@/queries/queries";

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
  
  return <main>
    <ArticleBanner article={article} />
    <TwoColumnLayout sidebar={<Sidebar>
      <SidebarBox title={"Related Articles"}>

        <Suspense fallback={<LoadingIndicator />}>
          <RelatedArticleSlider relatedArticlesPromise={relatedArticles} />
        </Suspense>

        {/*<MyArticleSliderDemo title={"Zähler"} initialValue={200}/>*/}

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

// Render Properties

function Story() {
  return <Layout>
    { (titleSize) => {
      return <h1
        className={titleSize === "sm" ? "Small" : "Large"} >
        ...</h1>
    } }
  </Layout>
}


type LayoutProps = {
  children: (titleSize: string) => ReactNode
}
function Layout(props: LayoutProps) {

  const titleSize = "...";
  return <div>
    {props.children(titleSize)}
  </div>
}