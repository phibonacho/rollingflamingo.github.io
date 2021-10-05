import React from 'react';

import './App.scss';

import HeroBanner from "./component/hero-banner/HeroBanner";
import "./component/fontawesome/fontawesome";
import Header from "./component/header/Header";
import Section from "./component/section/Section";
import Herschel from "./media/images/herschel.png";
import Tiresia from "./media/images/tiresia.png";
import Coeus from "./media/images/coeus.png";
import Ponos from "./media/images/ponos.png";
import NavMenu from "./component/header/NavMenu";
import Experience from "./component/timeline/Experience";
import TextLogo from "./component/graphics/TextLogo";
import Footer from "./component/footer/Footer";
import FullWidthProject, {IFullWidthProject} from "./component/projects/FullWIdthProject";

interface IAppProps {

}

interface IAppState {
}

let projects: IFullWidthProject[] = [
  {
    title: 'Herschel',
    description: 'Herschel has been the first web project I worked on, it consisted in a fake web portal to book space travels to other planets. ',
    tags: ["web<br>pack", "j<br>query", "yarn", "boot<br>strap"],
    image: Herschel,
    link: 'https://github.com/non-sono-bello-ma-patcho/startsaw-herschel',
    theme: "purple"
  },
  {
    title: 'Tiresia',
    description: 'Tiresia was my first attempt to build a progressive webapp, it is written in Vue.js and it is basically a random number picker I build for fun.',
    tags: ['vue', "web<br>pack", "pwa"],
    image: Tiresia,
    link: 'https://andreastorace.it/tiresia',
    theme: 'teal'
  },
  {
    title: 'Ponos',
    description: 'Ponos is an abstract annotation evaluator built in Java. This library provide a tool to define Java object evaluators without the hassle of re-implement the evualtion algorithm. It only requires a reduction algorithm and the target annotation.',
    tags: ['java', "ref<br>lec<br>tion", "ann<br>ota<br>tion", "pro<br>ces<br>sor"],
    image: Ponos,
    link: 'https://github.com/rollingflamingo/ponos',
    theme: "blue"
  },
  {
    title: 'Coeus',
    description: 'Coeus is a simple vulnerability scanner written in node.js it provides a simple and customizable way to perform attacks on a specified host.',
    tags: ['vuln<br>erab<br>ility', "sec<br>uri<br>ty", "sql<br>Inje<br>ction", "cmd<br>Inje<br>ction"],
    image: Coeus,
    link: 'https://github.com/rollingflamingo/coeus',
    theme: 'yellow'
  }
];

export default class App extends React.Component<IAppProps, IAppState>{

  public componentDidMount() {
  }

  public render() {
    return (
        <main className="App">
          <Header
              leftContent={<TextLogo onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth"})}/>}
              rightContent={<NavMenu entries={[
                {
                  title: "Projects",
                  link: "#projects",
                  scroll: true
                },
                {
                  title: "About",
                  link: "#about",
                  scroll: true
                }
              ]}/>}
          />
          <HeroBanner/>
          <Section id={'projects'} title={'Projects'} fullWidth>
            {
              projects.map((p, i) => <FullWidthProject key={i} {...p}/>)
            }
          </Section>
          <Section id={"about"} title={"About me"}>
            <div className="flex flex-row flex-wrap">
              <div id="first-exp" className='flex xl:order-3 xl:flex-1-33 flex-full justify-center xl:justify-start'>
                <Experience
                    className="md:mr-64 xl:mr-0"
                    name="Backend developer"
                    period="January 2019 - July 2019"
                    faculty="Wikicasa"
                    description="Development and maintenance of SOAP/REST services to data gathering for a real estate italian portal."
                />
              </div>
              <div id="second-exp" className='flex xl:order-1 md:order-3 xl:justify-end justify-center xl:flex-2-50 md:flex-1-60 flex-full'>
                <Experience
                    variant={2}
                    name="Fullstack developer"
                    period="July 2019 - November 2020"
                    faculty="Wikicasa"
                    description="After my internship as backend developer, I started to develop also small page sections and frontend logic."
                />
              </div>
              <div id="third-exp" className='flex xl:order-4 md:order-2 flex-full xl:flex-auto md:flex-1-40 md:justify-end md:self-center justify-center'>
                <Experience
                    name="Computer Science Bachelor Degree"
                    period="30 March 2020"
                    faculty="Università degli studi di Genova"
                    description=""
                    certificate
                />
              </div>
              <div id="last-exp" className='flex justify-center xl:order-2 md:order-4 xl:justify-start xl:flex-2-50 flex-full'>
                <Experience
                    className="md:ml-32 xl:ml-0"
                    name="Frontend developer"
                    period="December 2020 - August 2021"
                    faculty="Reply Cluster"
                    description="In Reply cluster I consolidated my interest in frontend development, implementing more complex solution for intranets."
                    variant={3}
                />
              </div>
              <div id="last-exp" className='flex order-5 xl:flex-1-33 flex-full justify-center'>
                <Experience
                    className="md:mr-72 xl:mr-0"
                    name="Frontend Developer"
                    period="September 2021 - Now"
                    faculty="Reply Bitmama"
                    description="In Bitmama I'm focusing on accessibility, in order to make page work with the most common assistive technologies. "
                    variant={4}
                />
              </div>
            </div>
          </Section>
          <Section id={"about-me"} title='About me' srOnly>
            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 text-center md:text-right self-center'>
                <h3 className='font-bold text-5xl text-obsidian dark:text-light pb-4'>Keep<br/>on<br/>learning</h3>
              </div>
              <div className='col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 self-center lg:line-clamp-6'>
                <p className='dark:text-white'>I'm a former computer science student keen on illustration and nature. I've always been curious about how things works and how they are built, computer science gave me the chance to widen this interest from mechanical world to computer's one. Problem solving shouldn't be limited to solve a problem by providing the answer or a solution, it should include creating a framework for the users to use for recognizing and overcome similar issues, a solution that grows and improves with the user, for the user.</p>
              </div>
            </div>
          </Section>
          <Footer/>
        </main>
    );
  }
}

/*
*           <Experience
            name="Computer Science Bachelor Degree"
            period="30 March 2020"
            faculty="Università degli studi di Genova"
            description=""
          />

*
* */
