import React from 'react';

import './App.scss';

import HeroBanner from "./component/hero-banner/HeroBanner";
import "./component/fontawesome/fontawesome";
import MyCard from "./component/static/MyCard";
import Navbar from "./component/navbar/Navbar";
import Section from "./component/section/Section";
import Me from "./media/images/cloud-me.png";
import Sample from "./media/images/bg_trianglify_dark_sm.png";
import NavMenu from "./component/navbar/NavMenu";
import ProjectArchive from "./component/projects/ProjectArchive";
import Experience from "./component/timeline/Experience";
import SvgCloudTriangleLg from "./component/graphics/CloudTriangleLg";
import TextLogo from "./component/graphics/TextLogo";
import Footer from "./component/footer/Footer";

interface IAppProps {

}

interface IAppState {
}

let projects = [
  {
    title: 'test title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien risus, a maximus justo malesuada id. Aenean congue facilisis massa, et laoreet nisi fermentum vitae. Donec vitae posuere erat. In congue lacus a purus congue feugiat. Aenean in mauris quis ipsum eleifend feugiat nec ac nibh.',
    tags: ['#tag'],
    image: Sample,
    link: '#'
  },
  {
    title: 'test title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien risus, a maximus justo malesuada id. Aenean congue facilisis massa, et laoreet nisi fermentum vitae. Donec vitae posuere erat. In congue lacus a purus congue feugiat. Aenean in mauris quis ipsum eleifend feugiat nec ac nibh.',
    tags: ['#tag'],
    image: Sample,
    link: '#'
  },
  {
    title: 'test title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien risus, a maximus justo malesuada id. Aenean congue facilisis massa, et laoreet nisi fermentum vitae. Donec vitae posuere erat. In congue lacus a purus congue feugiat. Aenean in mauris quis ipsum eleifend feugiat nec ac nibh.',
    tags: ['#tag'],
    image: Sample,
    link: '#'
  },
  {
    title: 'test title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien risus, a maximus justo malesuada id. Aenean congue facilisis massa, et laoreet nisi fermentum vitae. Donec vitae posuere erat. In congue lacus a purus congue feugiat. Aenean in mauris quis ipsum eleifend feugiat nec ac nibh.',
    tags: ['#tag'],
    image: Sample,
    link: '#'
  }
]

export default class App extends React.Component<IAppProps, IAppState>{

  public render() {
    return (
      <div className="App">
        <Navbar
          leftContent={<TextLogo/>}
          rightContent={<NavMenu entries={[
            {
              title: "Projects",
              link: "#Projects"
            },
            {
              title: "About",
              link: "#About"
            }
          ]}/>}
        />
        <HeroBanner
          leftContent={<MyCard/>}
          rightContent={<div className={'cloud-image'}>
            <SvgCloudTriangleLg id={'triangle'}/>
            <img id='me' src={Me} alt="me in pain"/>
          </div>}
        />
        <Section title={"Projects"}>
          <ProjectArchive projects={projects}/>
        </Section>
        <Section title={"About"}>
          <div className="flex flex-row flex-wrap">
            <div id="first-exp" className='flex xl:order-3 xl:flex-1-33 flex-full justify-center xl:justify-start'>
              <Experience
                className="md:mr-64 xl:mr-0"
                name="Backend developer"
                period="January 2019 - July 2019"
                faculty="WikiRE"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nisl euismod, vulputate urna sit amet, pellentesque eros"
              />
            </div>
            <div id="second-exp" className='flex xl:order-1 md:order-3 xl:justify-end justify-center xl:flex-2-50 md:flex-1-60 flex-full'>
              <Experience
                variant={2}
                name="Fullstack developer"
                period="July 2019 - November 2020"
                faculty="Wikicasa"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nisl euismod, vulputate urna sit amet, pellentesque eros"
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
            <div id="fourth-exp" className='flex justify-center xl:order-2 md:order-4 xl:justify-start xl:flex-2-50 flex-full'>
              <Experience
                className="md:ml-32 xl:ml-0"
                name="Frontend developer"
                period="December 2020 - Now"
                faculty="Reply Cluster"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nisl euismod, vulputate urna sit amet, pellentesque eros"
                variant={3}
              />
            </div>
            <div id="last-exp" className='flex order-5 xl:flex-1-33 flex-full justify-center'>
              <Experience
                className="md:mr-72 xl:mr-0"
                name="Full time clown"
                period="Now"
                faculty="Self employee"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nisl euismod, vulputate urna sit amet, pellentesque eros"
                variant={4}
              />
            </div>
          </div>
        </Section>
        <Section title=''>
          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-2 text-right'>
              <h3 className='font-bold text-5xl text-obsidian'>Three Words Payoff</h3>
            </div>
            <div className='col-span-10 self-center'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nisl euismod, vulputate urna sit amet, pellentesque eros. Duis tristique sodales erat, quis commodo felis auctor in. Vestibulum vulputate augue ac sapien volutpat vestibulum. Quisque tempus sagittis dui eu iaculis. Aliquam commodo diam vulputate, euismod felis eget, efficitur nulla. Nullam convallis ipsum ipsum, aliquet sagittis justo scelerisque quis. Nunc semper placerat fermentum. Nullam turpis mauris, mollis et purus vel, iaculis commodo urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nisl euismod, vulputate urna sit amet, pellentesque eros. </p>
            </div>
          </div>
        </Section>
        <Footer/>
      </div>
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
