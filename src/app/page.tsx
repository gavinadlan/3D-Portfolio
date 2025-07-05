"use client";

import React from "react";
import Head from "next/head";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import Breadcrumbs from "@/components/breadcrumbs";

function MainPage() {
  return (
    <>
      <Head>
        <title>Gavin Adlan - Full-Stack Developer from Indonesia</title>
        <meta
          name="description"
          content="Gavin Adlan is a passionate Full-Stack Developer and Creative Technologist from Indonesia. Specializing in interactive web experiences, 3D animations, and innovative projects using React, Next.js, and modern technologies."
        />
        <meta
          name="keywords"
          content="Gavin Adlan, Full-Stack Developer Indonesia, Web Developer Indonesia, React Developer, Next.js Developer, 3D Animations, Interactive Web Experiences, JavaScript, TypeScript, Node.js, GSAP, Framer Motion, Spline"
        />
        <meta name="author" content="Gavin Adlan" />
        <meta property="og:title" content="Gavin Adlan - Full-Stack Developer from Indonesia" />
        <meta property="og:description" content="Gavin Adlan is a passionate Full-Stack Developer and Creative Technologist from Indonesia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gavinadlan.my.id" />
        <link rel="canonical" href="https://gavinadlan.my.id" />
      </Head>
      <Breadcrumbs />
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          
          {/* SEO-friendly hidden content for search engines */}
          <div className="sr-only">
            <section>
              <h2>Gavin Adlan - Full-Stack Developer Portfolio</h2>
              <p>Welcome to Gavin Adlan's portfolio website. Gavin is a passionate Full-Stack Developer and Creative Technologist based in Indonesia, specializing in creating interactive web experiences and innovative applications.</p>
              
              <h3>Skills & Technologies</h3>
              <p>Gavin Adlan has expertise in React, Next.js, TypeScript, JavaScript, Node.js, 3D animations, GSAP, Framer Motion, Spline, and modern web technologies. He creates cutting-edge web applications that combine beautiful design with powerful functionality.</p>
              
              <h3>Projects</h3>
              <p>Gavin Adlan's portfolio includes projects like Travel Story (MERN stack app), ArtsyMart (PHP e-commerce), JakEstate (React real estate), and Todogul (Flutter to-do app). These projects showcase his versatility and technical skills.</p>
              
              <h3>Contact Information</h3>
              <p>Contact Gavin Adlan for web development projects, collaborations, or inquiries. Email: gavinadlanhid@gmail.com | LinkedIn: linkedin.com/in/gavinadlan | GitHub: github.com/gavinadlan</p>
              
              <h3>Services</h3>
              <p>Gavin Adlan offers full-stack web development, React development, Next.js applications, 3D animations, interactive web experiences, and technical consulting services.</p>
            </section>
          </div>
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
