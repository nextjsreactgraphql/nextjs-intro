"use client";
import LikeIcon from "@/components/LikeIcon";
import { addLikeAction } from "@/components/likes-action";
import { useActionState } from "react";
import { LikeIndicator } from "@/components/LoadingIndicator";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {
  // const [ likes, setLikes] = useState(0)

  const [likes, action, isPending] = useActionState(
    addLikeAction,
    currentLikes,
  );

  //
  // function submitForm(fd: FormData) {
  //   console.log("articleId", fd.get("articleId"));
  //
  //   addLikeAction(fd.get("articleId") as string);
  // }

  return (
    <form className={"inline-block"} action={action}>
      <input type={"hidden"} name={"articleId"} value={articleId} />
      <button
        type={"submit"}
        className={
          "flex space-x-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[15px] text-teal-700 hover:cursor-default hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600"
        }
      >
        <span className={"ms-2"}>
          {isPending ? <LikeIndicator /> : <LikeIcon />}
          {likes}
        </span>
      </button>
    </form>
  );
}
