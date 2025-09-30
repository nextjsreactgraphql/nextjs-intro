
import ArticleCard from "@/components/ArticleCard";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import { fetchArticleList } from "@/queries/queries";

// React Server Component (RSC)

export default async function ArticleListPage() {

  console.log("Rendering ArticleListPage", new Date().toLocaleTimeString());

  const articleList = await fetchArticleList();

  return <div>
    <ArticleListGrid>
      {articleList.articles.map(a => <ArticleCard
        key={a.id}
        article={a} />)}
    </ArticleListGrid>
  </div>
}