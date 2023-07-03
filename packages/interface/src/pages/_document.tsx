import { Head, Html, Main, NextScript } from "next/document";
import clsx from "clsx";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={clsx("bg-bgColor", "text-white")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
