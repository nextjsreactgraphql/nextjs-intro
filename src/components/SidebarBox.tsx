import { ReactNode } from "react";


type SidebarBoxProps = {
  title: ReactNode;
  children: ReactNode;
};

export function SidebarBox({ title, children }: SidebarBoxProps) {
  return (
    <div className={"border-1 w-full rounded-2xl bg-slate-50 px-4 py-8"}>
      <div className={"mb-8 flex justify-center"}>
        {title}
      </div>
      {children}
    </div>
  );
}
