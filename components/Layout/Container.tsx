import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Hachiko Dictionary. Love words.",
    description: `English to English dictionary. Find and learn the meaning of words.`,
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hachiko Dictionary" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
