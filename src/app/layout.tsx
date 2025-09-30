import "../globals.css";

import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ecolify",
  description: "Next.js Workshop Application",
};

// type CardProps = {
//   children: ReactNode
// }
//
// function Card(props: CardProps) {
//   return <div className={"border"}>
//     {props.children}
//   </div>
// }
//
// function ArticleCard() {
//   return <Card>
//     <h1>Hallo Welt</h1>
//   </Card>
// }

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>ecolify Demo</title>
        {/*

        NOTE:
        Next.js has built-in support for both optimized Image and Font handling.
         -> In a "real" application I would consider using this built-in features
        */}
        <link href="/fonts/google-fonts.css" rel="stylesheet" />
        <link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="/fontawesome/css/brands.css" rel="stylesheet" />
        <link href="/fontawesome/css/regular.css" rel="stylesheet" />
        <link href="/fontawesome/css/solid.css" rel="stylesheet" />
      </head>
      <body
        suppressHydrationWarning
        className={`flex min-h-svh flex-col overflow-y-scroll font-inter text-teal-900 antialiased`}
      >
        <div className={"container mx-auto border border-red-700"}>
        {props.children}
        </div>
      </body>
    </html>
  );
}
