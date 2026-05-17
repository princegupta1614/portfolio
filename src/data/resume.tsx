import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prince Gupta",
  initials: "pg",
  url: "https://www.princegupta.me",
  location: "Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Gujarat,+India",
  description:
    "Full Stack Developer.",
  summary:
    "I am Prince Gupta, Full-Stack Developer and BCA Graduate with a strong foundation in logical problem-solving. Proficient in building responsive web and mobile applications using React, Node.js, and React Native. Dedicated to writing clean, maintainable code that solves practical business problems and delivers great user experiences.",
  avatarUrl: "/profile.jpeg",
  skills: [
    {
      name: "MongoDB",
      icon: Icons.mongodb,
    },
    {
      name: "Express.Js",
      icon: Icons.express,
    },
    {
      name: "React",
      icon: Icons.react,
    },
    {
      name: "Node.js",
      icon: Icons.nodejs,
    },
    {
      name: "React Native",
      icon: Icons.react,
    },
    {
      name: "Next.js",
      icon: Icons.nextjs,
    },
    {
      name: "Python",
      icon: Icons.python,
    },
    {
      name: "JavaScript",
      icon: Icons.javascript,
    },
    {
      name: "Laravel",
      icon: Icons.laravel,
    },
    {
      name: "Tailwind ",
      icon: Icons.tailwindcss,
    },
    {
      name: "REST ",
      icon: Icons.api,
    },
    {
      name: "Git",
      icon: Icons.github,
    },
    {
      name: "Linux",
      icon: Icons.linux,
    },
    {
      name: "MySQL",
      icon: Icons.mysql,
    },
    {
      name: "Figma",
      icon: Icons.figma,
    },
    {
      name: "VS Code",
      icon: Icons.vscode,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "princegupta7698@gmail.com",
    tel: "+91 8200225365",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/princegupta1614",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prince-gupta-32a91627b",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/prince_gupta1614",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:princegupta7698@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Future Interns",
      href: "https://futureinterns.com/",
      badges: [],
      location: "Rajkot, Gujarat, India",
      title: "Full Stack Deveploper intern",
      logoUrl: "https://futureinterns.com/wp-content/uploads/2025/05/cropped-cropped-Future-Interns-Site-Logo.png",
      start: "July 2025",
      end: "August 2025",
      description:
        "As a motivated full-stack developer, I specialize in the MERN stack, with practical experience building and deploying projects with React, Node.js, MongoDB, and Vercel.",
    },
  ],
  education: [
    {
      school: "Atmiya University",
      href: "https://atmiyauni.ac.in",
      degree: "Bachelor of Computer Application (BCA)",
      logoUrl: "https://atmiyauni.ac.in/images/logo.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Smart Business App",
      href: "https://tradly-admin.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "A smart business management app featuring AI insights, PDF invoice generation,send email invoice, and real-time inventory tracking. Built with React Native & Node.js, Express.js, Mongodb, Mongoose, JWT, pdfkit, etc..",
      technologies: [
        "React Native",
        "Node.Js",
        "Express.js",
        "Tailwind",
        "Mongodb",
        "JWT",
        "Mongoose",
        "pdfkit",
      ],
      links: [
        {
          type: "App",
          href: "https://github.com/princegupta1614/tradly_backend/releases/download/v1.0.0/tradly.apk",
          icon: <Icons.android className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/princegupta1614/tradly_backend/releases/download/v1.0.0/tradly.apk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Future Store",
      href: "https://futurestore.onrender.com/",
      dates: "2025",
      active: true,
      description:
        "A responsive mini e-commerce platform featuring dynamic product browsing, a smart shopping cart system, and secure user authentication. Built with React.js, Node.js, and MongoDB.",
      technologies: [
        "Node.js",
        "React.js",
        "MongoDB",
        "Tailwind",
        "Express.js",
        "Mongoose",
      ],
      links: [
        {
          type: "Website",
          href: "https://futurestore.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/princegupta1614/FUTURE_FS_02",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Library Management System",
      href: "https://librarium.ct.ws",
      dates: "2025",
      active: true,
      description:
        "Hackathon project: A full-stack Library Management System built with PHP, MySQL, HTML, CSS, and Bootstrap. Features include user login/logout, online PDF viewer, an admin panel for issuing books, and book availability search.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Apache",
        "HTML5",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://librarium.ct.ws",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/princegupta1614/librarium.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Portfolio Project",
      href: "https://princegupta.me/",
      dates: "2025",
      active: true,
      description: "Designed and developed a modern personal portfolio to showcase my software development journey. Built with Next.js and TypeScript for performance and type safety, Tailwind CSS, and enhanced with Lucide React Icons",
      technologies: [
        "Next.Js",
        "TypeScript",
        "Node.js",
        "Lucide-React",
        "Tailwind",
      ],
      links: [
        {
          type: "Website",
          href: "https://princegupta.me",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/princegupta1614/portfolio.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
