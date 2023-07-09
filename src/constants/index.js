import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Product Manager",
    icon: mobile,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Power BI",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technology Intern",
    company_name: "OLX Group",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2021 - May 2022",
    points: [
      "Optimised inspection reports, reducing inspection time by 33%, 39%, and 58% in Indonesia, Chile, and India, respectively.",
      "Built Inspection Report system for OLX launch in Turkey (Letgo), ensuring a seamless and successful launch.",
      "Developed a new inspection type for the B2C segment in Indonesia, expanding market reach and understanding customer needs.",
      "Successfully migrated Inspection backend service from GCP to AWS.",
    ],
  },
  {
    title: "Product User Research Intern",
    company_name: "Pigeon.Social",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2022 - April 2022",
    points: [
      "User usability research: as a proactive and passionate team member, i took the initiative to Conduct several user usability research studies for pigeon. these studies involved gathering Valuable insights and feedback from users, which were crucial in identifying pain points.",
      "Business intelligence (bi) dashboard: i contributed to the development of the bi dashboard, which Played a role in tracking and analysing key metrics for the product. i enabled us to gain valuable Insights into user behaviour, engagement, and other important performance indicators.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "OLX Group",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2022 - June 2023",
    points: [
      "Integrated OCR-model solution, reducing overall inspection duration by 10% and automating filling of inspection forms through value extraction from car documents.",
      "Received recognition for timely project completion by winning the Speedster award.",
      "Introduced Procurement Inspection for All Markets with the aim of minimising the rejection rate by dealers and enhancing overall operational efficiency during the car procurement process.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Successfully reduced the average response time from 1100 ms to 300 ms through optimising the api's.",
      "Achieved a remarkable decrease in error rates from 2% to 0.5% on average"
    ],
  },
  {
    title: "Associate Product Manager",
    company_name: "OnTap Direct",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Work in Progress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Saksham is one of those rare individuals that combine unbridled enthusiasm (especially for something he is passionate about), with a high degree of EQ+IQ. I have been lucky to have him involved with Pigeon.",
    name: "Sahil Bajaj",
    designation: "Founder",
    company: "Pigeon",
    image: "https://media.licdn.com/dms/image/C4D03AQGhgiBf8b24Sg/profile-displayphoto-shrink_200_200/0/1618921105402?e=1694649600&v=beta&t=b__zcWo4U3AMiw4IZ1D8gVW8nQ-EM2cm2nxGH2xSeXw",
  },
  {
    testimonial:
      "All in all, Saksham is a responsible, cheerful and calm personality to work with.",
    name: "Harsh Bhatia",
    designation: "Software Engineer",
    company: "Shipsy",
    image: "https://media.licdn.com/dms/image/D4D03AQHIPzYfwJRokw/profile-displayphoto-shrink_200_200/0/1664906801445?e=1694649600&v=beta&t=yfGVKzQMkJfrjdnyjM3v-jZ-RKS5Bxb_t_oOXhonM_E",
  },
];

const projects = [
  {
    name: "Tails For Tails",
    description:
      "Built a website prototype for an NGO in delhi While I was in college.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Product User Reasearch",
    description:
      "Did User Research, Usability Testing, and Analytics to understand User Behaviour.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "PowerBI",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Other Projects on Notion",
    description:
      "A comprehensive list of Projects I have been working on lately",
    tags: [
      {
        name: "User-Research",
        color: "blue-text-gradient",
      },
      {
        name: "Product Breakdowns",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
