import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <div className="bg-[#0B172A] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#BC4123]/80 scroll-smooth">
      <Head>
        <title>Pratt's ePortfolio</title>
      </Head>

      <Header socials={socials} />
      <section id="hero" className="snap-start fondoHero bg">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-end">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-end">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-[100%]">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://lh3.googleusercontent.com/a/ALm5wu1sFGv44GDqFXAtyl1NiugcTuEElQV6vvYG6r0ckg=s360-p-rw-no"
              alt=""
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      revalidate: 10,
    },
  };
};
