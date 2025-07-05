"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Travel Story App",
    description: `A full-stack MERN app where users can securely log in, write travel stories with images, and manage them with filtering and search.`,
    link: "https://travel-story-alpha.vercel.app",
    images: [
      "/assets/projects-screenshots/travelstory/Home.png",
      "/assets/projects-screenshots/travelstory/Home 2.png",
      "/assets/projects-screenshots/travelstory/Add Story.png",
      "/assets/projects-screenshots/travelstory/view story.png",
      "/assets/projects-screenshots/travelstory/Update Story.png",
      "/assets/projects-screenshots/travelstory/Login.png",
    ],
  },
  {
    id: 2,
    name: "ArtsyMart",
    description: `Simple PHP e-commerce site for paintings built with HTML, Bootstrap, and MySQL. Includes login, cart, checkout, and product listing.`,
    link: "https://github.com/gavinadlan/ArtsyMart",
    images: [
      "/assets/projects-screenshots/artsymart/home.png",
      "/assets/projects-screenshots/artsymart/catalog.png",
      "/assets/projects-screenshots/artsymart/loginpage.png",
      "/assets/projects-screenshots/artsymart/createaccount.png",
      "/assets/projects-screenshots/artsymart/footer.png",
    ],
  },
  {
    id: 3,
    name: "JakEstate",
    description: `A clean and modern real estate landing page built with React, TypeScript, and Tailwind CSS, focused on premium property listings.`,
    link: "https://jak-estate.vercel.app",
    images: [
      "/assets/projects-screenshots/jakestate/mainpage.png",
      "/assets/projects-screenshots/jakestate/about.png",
      "/assets/projects-screenshots/jakestate/contactus.png",
      "/assets/projects-screenshots/jakestate/project.png",
      "/assets/projects-screenshots/jakestate/testimonials.png",
    ],
  },
  {
    id: 4,
    name: "todogul",
    description: `A modern to-do list app built with Flutter. Includes authentication, onboarding, and smooth UI for task management.`,
    link: "https://github.com/gavinadlan/todogul",
    images: ["/assets/projects-screenshots/todogul/Todogul.png"],
  },
];

function Page() {
  return (
    <>
      <Head>
        <title>Projects - Gavin Adlan Portfolio</title>
        <meta
          name="description"
          content="Explore Gavin Adlan's projects including Travel Story, ArtsyMart, JakEstate, and Todogul. Full-stack web applications built with React, Next.js, and modern technologies."
        />
        <meta
          name="keywords"
          content="Gavin Adlan projects, Travel Story, ArtsyMart, JakEstate, Todogul, React projects, Next.js projects, Full-stack applications, Web development projects"
        />
        <meta name="author" content="Gavin Adlan" />
        <meta property="og:title" content="Projects - Gavin Adlan Portfolio" />
        <meta property="og:description" content="Explore Gavin Adlan's projects including Travel Story, ArtsyMart, JakEstate, and Todogul." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gavinadlan.my.id/projects" />
        <link rel="canonical" href="https://gavinadlan.my.id/projects" />
      </Head>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        
        {/* SEO-friendly hidden content for search engines */}
        <div className="sr-only">
          <h2>Gavin Adlan's Web Development Projects</h2>
          <p>Gavin Adlan has developed several innovative web applications showcasing his expertise in full-stack development:</p>
          <ul>
            <li><strong>Travel Story App:</strong> A full-stack MERN application for sharing travel experiences with authentication and image management.</li>
            <li><strong>ArtsyMart:</strong> A PHP e-commerce platform for art sales built with Bootstrap and MySQL.</li>
            <li><strong>JakEstate:</strong> A modern real estate landing page built with React, TypeScript, and Tailwind CSS.</li>
            <li><strong>Todogul:</strong> A Flutter-based to-do application with authentication and smooth UI.</li>
          </ul>
          <p>These projects demonstrate Gavin Adlan's skills in React, Next.js, TypeScript, PHP, Flutter, and modern web technologies.</p>
        </div>
      </div>
    </>
  );
}

export default Page;
