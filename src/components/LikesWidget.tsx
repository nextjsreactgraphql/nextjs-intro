"use client";

import LikeIcon from "@/components/LikeIcon";
import { mutateArticleLikes } from "@/queries/queries";
import { revalidatePath } from "next/cache";
import { useState } from "react";
import { z } from "zod";

type LikesWidgetProps = {
  articleId: string;
  currentLikes: number;
};

const MeinFormular = z.object({
  firstname: z.string().min(5),
  age: z.number(),
  password: z.string()
})

type MeinFormularType = z.infer<typeof MeinFormular>

const x = MeinFormular.parse({})

function saveFormular(data: MeinFormularType) {

}


export function LikesWidget({ articleId, currentLikes }: LikesWidgetProps) {

  // react hook form
  //   joi
  //   zod <--

  // // Variante 1
  // const [firstname, setFirstname] = useState("")
  //
  // // Variante 2
  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: ""
  // })

  function saveForm() {
    // ...
    // Server Function
  }

  return (
    <form className={"inline-block"}>
      {/*<input type={"text"} value={firstname}*/}
      {/*       onChange={e => setFormData({*/}
      {/*         ...formData,*/}
      {/*         firstname: e.target.value*/}
      {/*       })*/}
      {/*} />*/}
      <button
        type={"button"}
        onClick={() => saveForm()}
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
