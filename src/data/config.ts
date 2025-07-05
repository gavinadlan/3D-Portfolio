const config = {
  title: "Gavin Adlan | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Gavin, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Gavin, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Gavin",
    "portfolio",
    "full-stack developer",
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
