


import ArticleCard from "@/components/ArticleCard";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import { fetchArticleList } from "@/queries/queries";

// React Server Component (RSC)
//   werden gerendert im Server + Buildprozess


// export const dynamic = "force-dynamic";

export default async function ArticleListPage() {
const theDate = new Date().toLocaleTimeString();
  console.log("Rendering ArticleListPage", theDate);

  // const myHeaders = await headers();

  const articleList = await fetchArticleList();

  return <div>
    <h1>{theDate}</h1>
    <ArticleListGrid>
      {articleList.articles.map(a => <ArticleCard
        key={a.id}
        article={a} />)}
    </ArticleListGrid>
  </div>
}