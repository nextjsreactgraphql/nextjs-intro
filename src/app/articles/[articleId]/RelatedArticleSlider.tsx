"use client";

import { useState } from "react";
import { Article } from "@/types";
import ArticleCard from "@/components/ArticleCard";

type RelatedArticleSliderProps = {
  message: string;
  initialIndex: number;
  article: Article;
  date: Date
}

export default function RelatedArticleSlider(props: RelatedArticleSliderProps) {
console.log("DATUM", new Date().toISOString());
  const [index, setIndex] = useState(props.initialIndex);

  return <div>
    <button
      onClick={() => setIndex(index-1)}
    >Vorher</button>
    <p>Message: {props.message}</p>
    <p>Artikel: {props.article.title}</p>
    <p>Date: {props.date.toISOString()}</p>
    <ArticleCard article={props.article} />
    {index}
    <button
      onClick={() => setIndex(index+1)}
    >Nachher</button>
  </div>



}