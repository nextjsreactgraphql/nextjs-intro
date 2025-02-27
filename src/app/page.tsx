import Link from "next/link";

export default function LandingPage() {
  return (
    <section>
      <h1>Hallo Next.js</h1>

      <Link
        href={"/articles"}
        prefetch={false}
        className={"cursor-pointer hover:underline"}
      >
        Zu den Artikel
      </Link>
      {/*<Link href={"/hamburg"}>Nach HH</Link>*/}
    </section>
  );
}
