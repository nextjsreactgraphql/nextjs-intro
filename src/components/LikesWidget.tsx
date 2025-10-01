"use client"


import { useOptimistic, useTransition } from "react";

import { addLike } from "@/components/like-actions";
import LikeIcon from "@/components/LikeIcon";
import { LikeIndicator } from "@/components/LoadingIndicator";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {

  const [isPending, startTransition] = useTransition();
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(currentLikes);

  const handleLikeClick = () => {
    startTransition(() => {
      setOptimisticLikes(currentLikes + 1);
      return addLike(articleId);
    });

  }

  return (
    <div className={"inline-block"}>

      <input type={"hidden"} name={"newLikes"} value={currentLikes + 1} />
      <button
        disabled={isPending}
        type={"button"}
        onClick={() => handleLikeClick()}
        className={
          "flex space-x-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[15px] text-teal-700 hover:cursor-default hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600"
        }
      >
        <span className={"ms-2"}>
          {isPending ? <LikeIndicator /> : <LikeIcon />}
          {optimisticLikes} / {currentLikes}
        </span>
      </button>
    </div>
  );
}
