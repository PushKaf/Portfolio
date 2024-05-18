import { RiReactjsLine } from "react-icons/ri";
import { RiJavaFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { SiGooglecloud } from "react-icons/si";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiGoogletagmanager } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiLooker } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaGitAlt } from "react-icons/fa";
import { RiFileExcel2Line } from "react-icons/ri";


export const HERO_CONTENT = `I'm an undergrad CS student with a passion for learning and a drive to excel. I'm currently on track to complete both my bachelor's and master's within 3.5 years.

Beyond academics, I actively engage in projects and programming. I believe in constant growth and am always seeking new challenges to push my boundaries and hone my skills.

My background as a refugee in Nepal has given me a unique perspective and a deep appreciation for every opportunity. I understand the value of hard work and resourcefulness, qualities that fuel my drive to succeed.

Bringing not only technical expertise but also a fresh viewpoint, this allows me to approach problems from unique angles. Let's collaborate and build something amazing!`;

export const ABOUT_TEXT = `I'm an undergraduate computer science student with a passion for learning and a drive to excel. I'm currently on a dual-degree path, aiming to complete both my bachelor's and master's within a condensed timeframe. This ambitious pursuit reflects my dedication to my craft and my eagerness to contribute meaningfully to the field.

Beyond academics, I actively engage in extracurricular projects, competitions, and programming activities. I believe in constant growth and am always seeking new challenges to push my boundaries and hone my skills.

My background as a refugee in Nepal has instilled in me a unique perspective and a deep appreciation for every opportunity. I understand the value of hard work and resourcefulness, qualities that fuel my determination to succeed.

I bring not only technical expertise but also a fresh viewpoint, allowing me to approach problems from creative angles.  Let's collaborate and build something amazing together!`;

export const SKILLS_DATA = [
  { name: 'Python', progress: 0, icon: { component: FaPython, className: "text-blue-600" } },
  { name: 'Java', progress: 0, icon: { component: RiJavaFill, className: "text-red-500" } },
  { name: 'JavaScript', progress: 0, icon: { component: RiJavascriptLine, className: "text-yellow-400" } },
  { name: 'C', progress: 0, icon: { className: "text-yellow-400" } },
  { name: 'C++', progress: 0, icon: { component: TbBrandCpp, className: "text-gray-400" } },
  { name: 'Git', progress: 0, icon: { component: FaGitAlt, className: "text-orange-400" } },
  { name: 'Linux', progress: 0, icon: { component: FcLinux, className: "text-yellow-400" } },
  { name: 'React', progress: 0, icon: { component: RiReactjsLine, className: "text-cyan-400" } },
  { name: 'SQL', progress: 0, icon: { component: AiOutlineConsoleSql, className: "text-gray-400" } },
  { name: 'GCP', progress: 0, icon: { component: SiGooglecloud, className: "text-blue-400" } },
  { name: 'Google Analytics', progress: 0, icon: { component: DiGoogleAnalytics, className: "text-orange-400" } },
  { name: 'Google Tag Manager', progress: 0, icon: { component: SiGoogletagmanager, className: "text-cyan-700" } },
  { name: 'Looker Studio', progress: 0, icon: { component: SiLooker, className: "text-cyan-700" } },
  // { name: 'Excel', progress: 85, icon: { component: RiFileExcel2Line, className: "text-green-700" } }, 
];

export const EXPERIENCES_DATA = [
  {
    year: "Sep. 2022 - Apr. 2024",
    role: "Data Assistant",
    company: "Central Michigan University",
    description: `Massivly improved our data reporting by creating an automated system that slashed KPI report generation times by 1000%. Leveraging Google Tag Manager and Analytics, I uncovered two new user insights that empowered our marketing team. Furthermore, I designed and oversaw the development of multiple dashboards in Looker Studio, integrating data from numerous sources to provide comprehensive and actionable insights.`,
    technologies: ["Python", "GTM", "Google Analytics", "Looker Studio", "Automation"],
  },
  {
    year: "Sep. 2023 - Apr. 2024",
    role: "Computer Science Department Tutor",
    company: "Central Michigan University",
    description: `Tutored over 50 students in complex computer science topics, providing personalized instruction to meet their unique learning needs.`,
    technologies: ["Java", "Python", "SQL"],
  },
  {
    year: "Jun. 2023 - Aug. 2023",
    role: "Marketing & Data Technology Intern",
    company: "Express",
    description: `I developed an XML parsing system capable of handling thousands of XML files daily for BigQuery tables, significantly streamlining data flow. Additionally, I integrated Slack with GCP DataProc to generate runtime and billing reports and created a GCS deletion script, resulting in cost reductions.`,
    technologies: ["Python", "GCP (BigQuery, DataProc, GCS, Billing, & More)", "SQL"],
  },
];

export const PROJECTS_DATA = [
  {
    title: "Higher or Lower Website Game",
    description:
      "The \"Higher or Lower\" game challenges users to guess which of two presented YouTube videos has more views. Users are shown one video and must determine if the second video has higher or lower view counts solely based on the title and thumbnail. The game is dynamic and responsive, providing an engaging user experience with persistent score tracking.",
    technologies: ["Python", "Django", "JavaScript", "HTML", "CSS", "APIs", "JSON"],
  },
  {
    title: "Gesture Media Controller",
    description:
      "Allows users to control YouTube videos using hand gestures with any camera. Leveraging Google MediaPipe for hand tracking and incorporating custom gesture recognition, the system uses OpenCV to map gestures to media actions such as pause/play, volume control, next/previous video navigation, and more. The project is built with Python and NumPy, and utilizes Selenium for browser automation.",
    technologies: ["Python", "Selenium", "OpenCV", "NumPy", "MediaPipe"],
    github: "https://github.com/PushKaf/Gesture-Media-Controller",
  },
  {
    title: "Text Emotion Analysis",
    description:
      "This project focuses on analyzing text to identify six distinct emotions: sadness, joy, love, anger, fear, and surprise, capturing a wide range of human emotions expressed in digital communication. I trained multiple machine learning and deep learning models, including logistic regression, naive Bayes, random forest, and BiLSTM. The BiLSTM model achieved over 90% F1 accuracy. Additionally, I developed a dynamic and responsive website where users can interact with all the models, input text, and receive a breakdown of the confidence values and predictions for each emotion. The website offers an intuitive interface for testing and comparing model performance.",
    technologies: ["Python", "Keras", "NLTK", "ScikitLearn", "Pandas", "Docker", "CloudRun", "Matplotlib", "Flask", "HTML", "CSS"],
  },
  {
    title: "Drone Programming",
    description:
      "Using a DJI Tello drone, I developed and implemented multiple advanced features. These include facial recognition and tracking, allowing the drone to follow a person in 3D space seamlessly. Additionally, I created a path mapping feature that translates the drone's 3D flight path into a 2D space map for better visualization and analysis.",
    technologies: ["Python", "OpenCV", "DJIApi"],
    github: "https://github.com/PushKaf/telloDroneFaceTracking",
  },
  {
    title: "Content Aggregator",
    description:
      "Leverages Python, Flask, BeautifulSoup, and Tweepy to collect and display news from Google News and Twitter, providing quick and easy access to the latest information. I built a dynamic and responsive website using Flask, allowing users to filter and view aggregated data seamlessly. The website was deployed on a local network using a Raspberry Pi, ensuring accessibility and efficient performance.",
    technologies: ["Python", "Flask", "BeautifulSoup", "Tweepy", "HTML", "CSS"],
    github: "https://github.com/PushKaf/google-twitter-content-aggregator",
  },
  {
    title: "Portfolio Website (this one!)",
    description:
      "Simple responsive and dynamic portfolio website to showcase my projects, experiences, and skills.",
    technologies: ["Vite", "React", "Tailwind"],
    github: "https://github.com/PushKaf/Portfolio",
    website: "https://pkaf.vercel.app/"
  },
  // {
  //   title: "Portfolio Website (this one!)",
  //   description:
  //     "Simple responsive and dynamic portfolio website to showcase my projects, experiences, and skills.",
  //   technologies: ["Vite", "React", "Tailwind"],
  // },
  // {
  //   title: "Portfolio Website (this one!)",
  //   description:
  //     "Simple responsive and dynamic portfolio website to showcase my projects, experiences, and skills.",
  //   technologies: ["Vite", "React", "Tailwind"],
  // },
];

export const CONTACT = {
  email: "kafleypushkal@gmail.com",
};

