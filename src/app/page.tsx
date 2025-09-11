import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <p>Hello World!!!!!!!!!!!!!!</p>

      <Link className={"cursor-pointer underline"}
            href={"/articles"}>
        Zur Artikelliste
      </Link>
    </div>
  );
}
