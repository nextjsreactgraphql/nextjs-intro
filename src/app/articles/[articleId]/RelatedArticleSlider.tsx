"use client";

import { ReactNode, use, useState } from "react";
import { Article, RelatedArticle } from "@/types";
import RelatedArticleCard from "@/app/articles/[articleId]/RelatedArticleCard";

type RelatedArticleSliderProps = {
 relatedArticles: Promise<ReactNode[]>
}

export default function RelatedArticleSlider(props: RelatedArticleSliderProps) {

  const renderedCards = use(props.relatedArticles);

console.log("DATUM", new Date().toISOString());
  const [index, setIndex] = useState(0);

  return <div className={"p-8 space-y-4"}>
    <button
      onClick={() => setIndex(index-1)}
    >Vorher</button>
    {renderedCards[index]}
    {/*<RelatedArticleCard*/}
    {/*  relatedArticle={props.relatedArticles[index]*/}
    {/*} />*/}
    <button
      onClick={() => setIndex(index+1)}
    >Nachher</button>
  </div>



}