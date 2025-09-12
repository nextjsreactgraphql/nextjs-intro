// React Server Components (RSC)
import { fetchArticleList } from "@/queries/queries";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import ArticleCard from "@/components/ArticleCard";

export default async function ArticlesPage() {
  //
  const response = await fetchArticleList();

  const date = new Date().toISOString();

  console.log("RENDERING ArticleListPage", date);
  return <div className={"container mx-auto"}>
    <ArticleListGrid>
      {response.articles.map(
        article => <ArticleCard key={article.id} article={article} />
      )}
  </ArticleListGrid>
  </div>;
}
