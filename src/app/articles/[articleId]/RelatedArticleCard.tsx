import { RelatedArticle } from "@/types";

type RelatedArticleCardProps = {
  relatedArticle: RelatedArticle
}

export default function RelatedArticleCard(props: RelatedArticleCardProps) {
  return <div className={"border border-red-700"}>
    <h1>{props.relatedArticle.title}</h1>
    <img className={"size-16"} src={props.relatedArticle.image?.uri} />
  </div>
}