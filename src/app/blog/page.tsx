import React from "react";
import Head from "next/head";

function Page() {
  return (
    <>
      <Head>
        <title>Blog - Gavin Adlan</title>
        <meta
          name="description"
          content="Gavin Adlan's blog about web development, React, Next.js, and modern web technologies. Coming soon with insights and tutorials."
        />
        <meta
          name="keywords"
          content="Gavin Adlan blog, web development blog, React blog, Next.js blog, programming tutorials, web development insights"
        />
        <meta name="author" content="Gavin Adlan" />
        <meta property="og:title" content="Blog - Gavin Adlan" />
        <meta property="og:description" content="Gavin Adlan's blog about web development and modern technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gavinadlan.my.id/blog" />
        <link rel="canonical" href="https://gavinadlan.my.id/blog" />
      </Head>
      <div className="container mx-auto text-zinc-300 flex justify-center items-center h-full">
        <h1 className="text-3xl">Oops no blog posts!</h1>
        
        {/* SEO-friendly hidden content for search engines */}
        <div className="sr-only">
          <h2>Gavin Adlan&apos;s Web Development Blog</h2>
          <p>Welcome to Gavin Adlan&apos;s blog about web development, React, Next.js, and modern web technologies. This blog will feature tutorials, insights, and best practices for full-stack development.</p>
          <p>Gavin Adlan is a Full-Stack Developer from Indonesia who specializes in creating interactive web experiences and innovative applications.</p>
        </div>
      </div>
    </>
  );
}

export default Page;
