import { ReactNode } from "react";

import ArticlesRouteHeader from "@/components/layout/ArticlesRouteHeader";

type ArticlesLayoutProps = {
  children: ReactNode
}

export default function ArticlesRouteLayout(props: ArticlesLayoutProps) {

  return <main className={"ArticlesLayout"}>
    <ArticlesRouteHeader />
    {props.children}
  </main>

}