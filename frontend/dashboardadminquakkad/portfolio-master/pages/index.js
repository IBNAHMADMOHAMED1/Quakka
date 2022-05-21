import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
const Experience = dynamic(() => import("../containers/Experience"));
const Education = dynamic(() => import("../containers/Education"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
import { openSource } from "../data";
import SEO from "../components/SEO";
export default function Home({ githubProfileData }) {
  return (
    <>
    	<SEO
				data={{
					title: "Yassine ELHOUBI",
					description:
						"A passionate Full Stack Web Developer and Mobile App Developer.",
					image: "https://avatars.githubusercontent.com/u/77664568?v=4",//picture
					url: "https://yassineelhoubi-seven-sepia.vercel.app/",
					keywords: [
						"Yassine",
						"Yassine ELHOUBI",
						"elhoubi",
						"lhb",
						"yassine",
						"yassine elhoubi",
						"youcode",
						"simplon",
						"UM6P",
						"LEET",
						"1337",
						"MMPG",
						"Food7Go",
						"Cleanzy",
						"linkedin",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"angular ",
						"vue",
						"firebase ",
						"vuex ",
						"laravel ",
						"contextapi",
						"redux",
						"php",
						"css",
						"scss",
						"bootstrap",
						"tailwind",
						"Mui",
					],
				}}
			/>
      <Navigation />
      <Greetings />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Proficiency />
      <GithubProfileCard prof={githubProfileData} />
    </>

  )
}
Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}