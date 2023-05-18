import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
} from "../assets";
import Ril from "../assets/ril.png"
import Tq from "../assets/tq.png"
import foodstore from "../assets/foodstore.png"
import smartbank from "../assets/smartbank.png"
import interior from "../assets/interior.png"
import github from "../assets/tech/github.png"
import c from "../assets/tech/c.png"
import cpp from "../assets/tech/cpp.png"
import mysql from "../assets/tech/mysql.png"
import netlify from "../assets/tech/netlify.png"
import python from "../assets/tech/python.png"


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "netlify",
    icon: netlify,
  },
  {
    name: "python",
    icon: python,
  },
 
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Reliance Industries Limited",
    icon: Ril,
    iconBg: "#383E56",
    date: "January 2023 - April 2023",
    points: [
      "Developed a Project called Card Scanner",
      "Project aimed to scan a visiting card and separate all the details in a text file in the form of key-value pair",
      "Skills used: Python and Machine learning",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Techq Konnect",
    icon: Tq,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Developed a front-end design for two websites Educational website and a Blog website",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Skills used: HTML, CSS and JS",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Store",
    description:
      "Web-based platform that allows users to search for the food and order the desired food they want by paying online in a very quick and easy way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: foodstore,
    source_code_link: "https://github.com/Pushti-R/Food-Store",
    demo_link: "https://foodiesstop.netlify.app/"
  },
  {
    name: "Smart Bank",
    description:
      "Web application template that enables users to search for bank facilities, view account details, and reduce the need of visiting bank personally.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: smartbank,
    source_code_link: "https://github.com/Pushti-R/smart-bank",
    demo_link: "https://digital-bank.netlify.app/"
  },
  {
    name: "Interior Design",
    description:
      "A comprehensive interior design platform that allows users to book services, look for different packages, view sample works and also look at the testimonials.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: interior,
    source_code_link: "https://github.com/Pushti-R/Interior-Design",
    demo_link: "https://pushti-r.github.io/Interior-Design/"
  },
];

export { services, technologies, experiences, testimonials, projects };
