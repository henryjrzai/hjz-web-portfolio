/*Tech Stack Icon*/
import vue from "@/assets/images/stack/vue.svg"
import php from "@/assets/images/stack/php.svg"
import bootstrap from "@/assets/images/stack/bootstrap.svg"
import kotlin from "@/assets/images/stack/kotlin.svg"
import js from "@/assets/images/stack/js.svg"
import laravel from "@/assets/images/stack/laravel.svg"
import node from "@/assets/images/stack/node.svg"
import express from "@/assets/images/stack/express.svg"
import mongodb from "@/assets/images/stack/mongodb.svg"
import mysql from "@/assets/images/stack/mysql.svg"
import postgres from "@/assets/images/stack/postgree.svg"
import firebase from "@/assets/images/stack/firebase.svg"

/*Project Thumbnail*/
// import portfolioV1 from "@/assets/images/projects/webporto.png"
import helpdeskItsk from "@/assets/images/projects/helpdeskitsk.png"
import bumdes from "@/assets/images/projects/bumdesairbersih.png"

export const services = [
  {
    "id": 1,
    "title": "Web Development",
    "icon": "fa-solid fa-globe",
  },
  {
    "id": 2,
    "title": "Mobile App ",
    "icon": "fa-brands fa-android",
  },
  {
    "id": 3,
    "title": "System Analyst",
    "icon": "fa-solid fa-sitemap",
  },
]

export const stack = [
  {
    id: 1,
    name: "VueJS",
    icon: vue,
    baseColor : "#4DBA87"
  },
  {
    id: 2,
    name: "php",
    icon: php,
    baseColor : "#777BB3"
  },
  {
    id: 3,
    name: "Bootstrap",
    icon: bootstrap,
    baseColor : "#5E3B7F"
  },
  {
    id: 4,
    name: "Kotlin",
    icon: kotlin,
    baseColor : "#2C7FDE"
  },
  {
    id: 5,
    name: "Javascript",
    icon: js,
    baseColor : "#F7DF1E"
  },
  {
    id: 6,
    name: "Laravel",
    icon: laravel,
    baseColor : "#FF5A4E"
  },
  {
    id: 7,
    name: "NodeJS",
    icon: node,
    baseColor : "#76B062"
  },
  {
    id: 8,
    name: "Express",
    icon: express,
    baseColor : "#828282"
  },
  {
    id: 9,
    name: "MongoDB",
    icon: mongodb,
    baseColor : "#76AD5A"
  },
  {
    id: 10,
    name: "MySQL",
    icon: mysql,
    baseColor : "#00618A"
  },
  {
    id: 11,
    name: "PostgreSQL",
    icon: postgres,
    baseColor : "#336993"
  },
  {
    id: 12,
    name: "Firebase",
    icon: firebase,
    baseColor : "#FFCA28"
  }
]

export const projects = [
  {
    id: 1,
    name: "Helpdesk ITSK",
    thumbnail: helpdeskItsk,
    link: "",
    github : "https://gitlab.com/henryjrzai/helpdesk-itsk",
  },
  {
    id: 2,
    name: "BUMDes Air Bersih Pegunungan Desa",
    thumbnail: bumdes,
    link: "https://bumdesairbersih.henryjrzai.web.id/",
    github : "https://github.com/henryjrzai/BUMDes-Air-Pegunungan.git",
  }
]

export const experiences = [
  {
    id: 2,
    title: "Full Stack Web Developer | MSIB",
    company: "PT Arkatama Multi Solusindo",
    date: "Feb 2024 - Jun 2024",
    desc: `
          - Learn about design and development of websites using the PHP Laravel framework
          - Mastering modern techniques in web development, including the use of Bootstrap for front-end design.
          - Applying JavaScript to enhance interactivity and functionality on the client side (front end) and fetching data using AJAX.
          - Engaging in practical projects that hone Full Stack Web Development skills. 
          `,
    direction: "timeline-block-left"
  },
  {
    id: 1,
    title: "Android Developer Learning Path | MSIB",
    company: "Bangkit Academy 2023 By Google, GoTo, Traveloka",
    date: "Aug 2023 - Des 2023",
    desc: `
          - Learn about the Kotlin programming language
          - Build simple applications in each module project
          - Apply MVVM architecture design and SOLID principles in application development
          - Use the Jetpack Compose library to simplify the design of application interfaces
          `,
    direction: "timeline-block-right"
  }
]