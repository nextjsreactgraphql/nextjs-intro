import { Metadata } from "next";
import { fetchArticleList } from "@/queries/queries";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Artikel Liste",
};
// React Server Components (RSC)
//  gerendert:
//   - auf dem Server zur Laufzeit
//   - im Buildprozess
export default async function ArticleListPage() {
  // process.env.NODE_ENV
  // process.exit(0)
  const result = await fetchArticleList();

  return (
    <div className={"container mx-auto"}>
      <ArticleListGrid>
        {result.articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ArticleListGrid>
    </div>
  );
}
