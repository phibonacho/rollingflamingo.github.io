import React from 'react';
import './App.scss';

import HeroBanner from "./component/hero-banner/HeroBanner";
import "./component/fontawesome/fontawesome";
import BuildingDisclaimer from "./component/static/BuildingDisclaimer";
import MyCard from "./component/static/MyCard";
import Navbar from "./component/navbar/Navbar";
import Section from "./component/section/Section";
import Logo from "./media/graphics/text-logo.svg";
import Test from "./media/graphics/cloud-triangle-lg.svg";
import Me from "./media/images/cloud-me.png";
import Sample from "./media/images/bg_trianglify_dark_sm.png";
import NavMenu from "./component/navbar/NavMenu";
import ProjectArchive from "./component/projects/ProjectArchive";

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
          leftContent={<img src={Logo} alt="site logo"/>}
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
            <img id='triangle' src={Test} alt="cloud"/>
            <img id='me' src={Me} alt="me in pain"/>
          </div>}
        />
        <div className={`temp-disclaimer`}>
          <BuildingDisclaimer/>
        </div>
        <Section title={"Projects"}>
          <ProjectArchive projects={projects}/>
        </Section>
        <Section title={"About"}>

        </Section>
      </div>
    );
  }
}
