// React Server Components (RSC)
import { fetchArticleList } from "@/queries/queries";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import ArticleCard from "@/components/ArticleCard";
import ArticleListNavBar from "@/components/articlelistpage/ArticleListNavBar";

type ArticlesPageProps = {
  searchParams: Promise<{
    orderBy?: string
  }>
}

export default async function ArticlesPage(props: ArticlesPageProps) {

  const {orderBy} = await props.searchParams;

  //
  const response = await fetchArticleList({
    orderBy
  });

  const date = new Date().toISOString();

  console.log("RENDERING ArticleListPage", date);
  return <div className={"container mx-auto"}>
    <ArticleListNavBar />

    <ArticleListGrid>
      {response.articles.map(
        article => <ArticleCard key={article.id} article={article} />
      )}
  </ArticleListGrid>
  </div>;
}
