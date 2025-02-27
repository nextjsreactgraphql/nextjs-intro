import { Metadata } from "next";
import { fetchArticleList } from "@/queries/queries";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import ArticleCard from "@/components/ArticleCard";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Artikel Liste",
};
// React Server Components (RSC)
//  gerendert:
//   - auf dem Server zur Laufzeit
//   - im Buildprozess

// export const dynamic = "force-dynamic"
// export const revalidate = 20;

export default async function ArticleListPage() {
  console.log("ArticleListPage rendered at", new Date().toISOString());

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
