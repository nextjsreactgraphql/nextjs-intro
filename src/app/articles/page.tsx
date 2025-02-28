import { Metadata } from "next";
import { fetchArticleList } from "@/queries/queries";
import ArticleListGrid from "@/components/articlelistpage/ArticleListGrid";
import ArticleCard from "@/components/ArticleCard";
import { headers } from "next/headers";
import ArticleListNavBar from "@/components/articlelistpage/ArticleListNavBar";

export const metadata: Metadata = {
  title: "Artikel Liste",
};
// React Server Components (RSC)
//  gerendert:
//   - auf dem Server zur Laufzeit
//   - im Buildprozess

// export const dynamic = "force-dynamic"
// export const revalidate = 20;

type ArticleListPageProps = {
  searchParams: Promise<{ orderBy: string }>;
};

export default async function ArticleListPage({
  searchParams,
}: ArticleListPageProps) {
  const { orderBy } = await searchParams;

  console.log("ArticleListPage rendered at", new Date().toISOString());

  // process.env.NODE_ENV
  // process.exit(0)
  const result = await fetchArticleList({ orderBy });

  return (
    <div className={"container mx-auto"}>
      <ArticleListNavBar />
      <ArticleListGrid>
        {result.articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ArticleListGrid>
    </div>
  );
}
