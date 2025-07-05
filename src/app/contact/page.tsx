import React from "react";
import Head from "next/head";

function Page() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(event)
  }
  return (
    <section>
      <Head>
        <title>Contact Gavin Adlan - Full-Stack Developer</title>
        <meta
          name="description"
          content="Contact Gavin Adlan for web development projects, collaborations, or inquiries. Full-Stack Developer specializing in React, Next.js, and interactive web experiences."
        />
        <meta
          name="keywords"
          content="Contact Gavin Adlan, Gavin Adlan contact, hire Gavin Adlan, web developer contact, React developer contact, Next.js developer contact"
        />
        <meta name="author" content="Gavin Adlan" />
        <meta property="og:title" content="Contact Gavin Adlan - Full-Stack Developer" />
        <meta property="og:description" content="Contact Gavin Adlan for web development projects and collaborations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gavinadlan.my.id/contact" />
        <link rel="canonical" href="https://gavinadlan.my.id/contact" />
      </Head>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            // onClick={handleSubmit}
          >
            Send message
          </button>
        </form>
        
        {/* SEO-friendly hidden content for search engines */}
        <div className="sr-only">
          <h2>Contact Gavin Adlan - Full-Stack Developer</h2>
          <p>Get in touch with Gavin Adlan for web development projects, collaborations, or any inquiries about his work. Gavin is available for freelance projects, full-time positions, and technical consultations.</p>
          <p>Contact methods: Email at gavinadlanhid@gmail.com, LinkedIn at linkedin.com/in/gavinadlan, or GitHub at github.com/gavinadlan.</p>
          <p>Gavin Adlan specializes in React, Next.js, TypeScript, and modern web technologies. Based in Indonesia, available for remote work worldwide.</p>
        </div>
      </div>
    </section>
  );
}

export default Page;
