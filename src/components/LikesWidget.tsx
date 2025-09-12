"use client";
import LikeIcon from "@/components/LikeIcon";
import { mutateArticleLikes } from "@/queries/queries";
import { likeArticle, sayHello } from "@/components/like-actions";
import { useTransition } from "react";
import LoadingIndicator, { LikeIndicator } from "@/components/LoadingIndicator";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {

  // useState

  const [isTransitionRunning, startTransition]
   = useTransition();

  const handleClick = () => {
    startTransition(  async ()  => {
      // kein Refresh!
      // mutateArticleLikes(articleId)
      // const greeting = sayHello("Susi");
      // console.log("Greeting", greeting);
      return likeArticle(articleId);
  })

  }

  return (
    <div className={"inline-block"}>
      <button
        disabled={isTransitionRunning}
        type={"button"}
        onClick={handleClick}
        className={
          "flex space-x-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[15px] text-teal-700 hover:cursor-default hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600"
        }
      >
        <span className={"ms-2"}>
          {isTransitionRunning ?<LikeIndicator />: <LikeIcon />}

          {currentLikes}
        </span>
      </button>
    </div>
  );
}
