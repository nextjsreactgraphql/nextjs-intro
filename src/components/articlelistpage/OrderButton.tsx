"use client";
import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { Button, CheckLabel } from "@/components/Button";
import Link from "next/link";

type OrderButtonProps = {
  children: ReactNode;
  orderBy?: "DATE" | "CATEGORY" | "LIKES";
};
export function OrderButton({ orderBy, children }: OrderButtonProps) {
  // URLSearchParams
  const searchParams = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);
  if (orderBy === undefined) {
    newSearchParams.delete("orderBy");
  } else {
    newSearchParams.set("orderBy", orderBy);
  }

  console.log("newSearchParams", newSearchParams.toString());

  const isCurrent = orderBy === (searchParams.get("orderBy") || undefined);

  return (
    <Button checked={isCurrent}>
      <CheckLabel checked={isCurrent}>
        {/*<button onClick={() => handleClick()}>*/}
        <Link href={`/articles?${newSearchParams.toString()}`}>{children}</Link>
      </CheckLabel>
    </Button>
  );
}
