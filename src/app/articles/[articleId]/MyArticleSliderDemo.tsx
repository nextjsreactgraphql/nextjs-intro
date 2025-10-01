"use client"

import { useState } from "react";

import { H2 } from "@/components/Heading";


// "Client Komponent"
//  -> JS wird im Client ausgeführt

type MyArticleSliderDemoProps = {
  title: string;
  initialValue: number;
}

export default function MyArticleSliderDemo(props: MyArticleSliderDemoProps) {

  const [count, setCount] = useState(props.initialValue);

  return <div>
    <H2>{props.title}</H2>
    <p>Wert: {count}</p>
    <button onClick={() => setCount(count+1)}>Hochzählen!</button>
  </div>
}