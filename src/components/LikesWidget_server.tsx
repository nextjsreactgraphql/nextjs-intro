import LikeIcon from "@/components/LikeIcon";
import { mutateArticleLikes } from "@/queries/queries";
import { revalidatePath } from "next/cache";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {

  async function handleFormSubmit(fd: FormData) {
    "use server"

    console.log("articleId", articleId, currentLikes);

    // process.exit(1);

    console.log("huhuhhuhu" + fd.get("myArticleId"));

    const newLikes = await mutateArticleLikes(articleId);

    revalidatePath("/articles")
    revalidatePath("/articles/" + articleId);
  }

  return (
    <form className={"inline-block"} action={handleFormSubmit}>
      <input type={"hidden"} name={"myArticleId"} value={articleId}/>
      <button
        type={"submit"}
        className={
          "flex space-x-2 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[15px] text-teal-700 hover:cursor-default hover:bg-teal-700 hover:text-white disabled:cursor-default disabled:border-teal-600 disabled:bg-teal-600 disabled:text-teal-50 disabled:hover:bg-teal-600"
        }
      >
        <span className={"ms-2"}>
          <LikeIcon />
          {currentLikes}
        </span>
      </button>
    </form>
  );
}
