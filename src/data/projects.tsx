import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaPhp, FaJava } from "react-icons/fa";
import {
  SiMysql,
  SiHtml5,
  SiBootstrap,
  SiDart,
  SiFlutter,
  SiCss3,
  SiAxios,
  SiReactrouter,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import {
  SiChakraui,
  SiDocker,
  SiFirebase,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiThreedotjs,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "Shadcn UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <FaPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  dart: {
    title: "Dart",
    bg: "black",
    fg: "white",
    icon: <SiDart />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />, // Diperbaiki menggunakan FaJava
  },
  reactRouter: {
    title: "React Router",
    bg: "black",
    fg: "white",
    icon: <SiReactrouter />,
  },
  axios: {
    title: "Axios",
    bg: "black",
    fg: "white",
    icon: <SiAxios />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "travelstory",
    category: "Full-stack App",
    title: "Travel Story App",
    src: "/assets/projects-screenshots/travelstory/Home.png",
    screenshots: [
      "Home.png",
      "Home 2.png",
      "Add Story.png",
      "view story.png",
      "Update Story.png",
      "Login.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactRouter,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.axios,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://travel-story-alpha.vercel.app",
    github: "https://github.com/gavinadlan/Travel-Story",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Travel Story App – Share Your Journeys with the World
          </TypographyP>
          <TypographyP className="font-mono ">
            A full-stack MERN application where users can create, manage, and
            share their travel stories complete with images and dates.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Authentication</TypographyH3>
          <p className="font-mono mb-2">
            JWT-secured signup/login with protected routes.
          </p>
          <TypographyH3 className="my-4 mt-8">Story Management</TypographyH3>
          <p className="font-mono mb-2">
            Add, edit, view, and delete stories with image uploads and
            date/location tagging.
          </p>
          <SlideShow
            images={this.screenshots.map(
              (img) => `${BASE_PATH}/travelstory/${img}`
            )}
          />
        </div>
      );
    },
  },
  {
    id: "artsymart",
    category: "E-Commerce",
    title: "ArtsyMart",
    src: "/assets/projects-screenshots/artsymart/home.png",
    screenshots: [
      "home.png",
      "catalog.png",
      "loginpage.png",
      "createaccount.png",
      "footer.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "",
    github: "https://github.com/gavinadlan/ArtsyMart",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            ArtsyMart is a simple e-commerce website for buying and selling
            paintings. Built with HTML, Bootstrap, PHP, and MySQL.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Includes login/register, product listings, shopping cart, checkout
            system, and MySQL integration.
          </p>
          <SlideShow
            images={this.screenshots.map(
              (img) => `${BASE_PATH}/artsymart/${img}`
            )}
          />
        </div>
      );
    },
  },
  {
    id: "jakestate",
    category: "Landing Page",
    title: "JakEstate",
    src: "/assets/projects-screenshots/jakestate/mainpage.png",
    screenshots: [
      "mainpage.png",
      "about.png",
      "contactus.png",
      "project.png",
      "testimonials.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "https://jak-estate.vercel.app",
    github: "https://github.com/gavinadlan/JakEstate.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JakEstate is a modern real estate landing page showcasing premium
            property listings with clean UI and responsive design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Interface</TypographyH3>
          <p className="font-mono mb-2">
            Built with React, TypeScript, and Tailwind CSS — designed for modern
            web performance and elegant visuals.
          </p>
          <SlideShow
            images={this.screenshots.map(
              (img) => `${BASE_PATH}/jakestate/${img}`
            )}
          />
        </div>
      );
    },
  },
  {
    id: "todogul",
    category: "Mobile App",
    title: "todogul",
    src: "/assets/projects-screenshots/todogul/Todogul.png",
    screenshots: ["Todogul.png"],
    skills: {
      frontend: [PROJECT_SKILLS.flutter],
      backend: [PROJECT_SKILLS.supabase],
    },
    live: "",
    github: "https://github.com/gavinadlan/todogul",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            todogul is a simple yet effective Flutter-based To-Do List app to
            manage daily tasks with ease and clarity.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Includes onboarding, login/register, and intuitive task management
            screens. Lightweight and optimized for mobile.
          </p>
          <SlideShow
            images={this.screenshots.map(
              (img) => `${BASE_PATH}/todogul/${img}`
            )}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://gavinadlan.my.id",
    github: "https://github.com/gavinadlan/3D--Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;
