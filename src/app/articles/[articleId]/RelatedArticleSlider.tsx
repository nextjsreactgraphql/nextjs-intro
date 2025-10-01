"use client";

import { ReactNode, use, useState } from "react";


type RelatedArticleSliderProps = {
  relatedArticlesPromise: Promise<ReactNode[]>;
};

export default function RelatedArticleSlider(props: RelatedArticleSliderProps) {

  const relatedArticles = use( props.relatedArticlesPromise)
  const [index, setIndex] = useState(0);

  const handleIndexChange = (amount: number) => {
    let newIndex = index + amount;
    if (newIndex < 0) {
      newIndex = relatedArticles.length - 1;
    } else if (newIndex >= relatedArticles.length) {
      newIndex = 0;
    }

    setIndex(newIndex);
  };

  return (
    <div>
      <div className={"flex items-center justify-between"}>
        <button onClick={() => handleIndexChange(-1)}>Zurück</button>
        <div>
          {index + 1} / {relatedArticles.length}
        </div>
        <button onClick={() => handleIndexChange(+1)}>Weiter</button>
      </div>

      {relatedArticles[index]}

      {/*<RelatedArticleCard relatedArticle={relatedArticles[index]} />*/}
    </div>
  );
}
