const config = {
  title: "Gavin Adlan | Full-Stack Developer",
  description: {
    long: "Gavin Adlan - Full-Stack Developer & Creative Technologist. Specializing in interactive web experiences, 3D animations, and innovative projects. Based in Indonesia, creating cutting-edge web applications with React, Next.js, and modern technologies. View my portfolio of projects including Travel Story, ArtsyMart, Todogul, and more.",
    short:
      "Gavin Adlan - Full-Stack Developer from Indonesia. Creating interactive web experiences and innovative projects with React, Next.js, and modern technologies.",
  },
  keywords: [
    "Gavin Adlan",
    "Gavin Adlan portfolio",
    "Gavin Adlan developer",
    "Gavin Adlan Indonesia",
    "full-stack developer Indonesia",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Travel Story",
    "ArtsyMart",
    "Todogul",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
    "Indonesian developer",
    "portfolio developer",
  ],
  author: "Gavin Adlan",
  email: "gavinadlanhid@gmail.com",
  site: "https://gavinadlan.my.id",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/gavinadlan",
    linkedin: "https://www.linkedin.com/in/gavinadlan/",
    instagram: "https://www.instagram.com/gavin_adlan",
    facebook: "https://www.facebook.com/gavinadlan/",
    github: "https://github.com/gavinadlan",
  },
};
export { config };
