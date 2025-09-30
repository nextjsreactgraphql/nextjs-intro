import Link from "next/link";

// Controller
// @GetMapping("/")



export default function LandingPage() {
  return <div>
    Hallo Ecolify!!

    <Link href={"/articles"}>Articles</Link>

  </div>
}