import Link from "next/link";

export default function LandingPage() {
  console.log("LandingPage rendered at", new Date().toISOString());

  return (
    <section>
      <h1>Hallo Next.js</h1>

      <Link
        href={"/articles"}
        prefetch={false}
        className={"cursor-pointer hover:underline"}
      >
        Zu den Artikeln
      </Link>
      {/*<Link href={"/hamburg"}>Nach HH</Link>*/}
    </section>
  );
}
