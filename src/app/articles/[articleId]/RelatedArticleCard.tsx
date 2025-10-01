import { H2 } from "@/components/Heading";
import { RelatedArticle } from "@/types";

type RelatedArticleCardProps = {
  relatedArticle: RelatedArticle
}
export default function RelatedArticleCard(props: RelatedArticleCardProps) {

  return <div className={"flex flex-col gap-y-2"}>
    <H2>{props.relatedArticle.title}</H2>
    {props.relatedArticle.image && <img
      className={"h-48 max-h-full w-full max-w-full"}
      src={props.relatedArticle.image?.uri}
      alt={props.relatedArticle.image?.altText} />}
  </div>

}