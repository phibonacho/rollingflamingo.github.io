import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './App.scss';

import HeroBanner from "./component/hero-banner/HeroBanner";
import "./component/fontawesome/fontawesome";
import {Header} from "./component/header/Header";
import Section from "./component/section/Section";
import {NavMenu} from "./component/header/NavMenu";
import Footer from "./component/footer/Footer";
import {Logo} from "./component/logo/Logo";
import ContactDialog from "./component/contactDialog/ContactDialog";
import ProjectSection from "./component/projects/ProjectSection";
import useHomePageData from "./api/homepage/HomepageConfig";
import AboutSection from "./component/timeline/AboutSection";

gsap.registerPlugin(ScrollTrigger);

interface IAppProps {

}

export default function App(props: IAppProps){
    const config = useHomePageData();

    useEffect(() => {
    }, []);

    return (
        <>
            <Header
                leftContent={
                    <button title='Scroll back to top' aria-label={'Scroll back to top'} onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth"})}>
                        <Logo/>
                        <span className='hidden'>Scroll back to top</span>
                    </button>
                }
                rightContent={

                    <NavMenu
                        description={"Page sections"}
                        entries={[
                            {
                                title: "Projects",
                                link: "#projects",
                                description: 'Scroll to project section',
                                scroll: true
                            },
                            {
                                title: "About",
                                link: "#about",
                                description: 'Scroll to about section',
                                scroll: true
                            }
                        ]}/>
                }
            />
            <main>
                <HeroBanner title={config.title} description={config.introduction}/>
                <ProjectSection/>
                <AboutSection/>
                <Section id={"about-me"} title='About me' srOnly>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 text-center md:text-right self-center'>
                            <h3 className='font-bold text-5xl text-obsidian dark:text-white pb-4' dangerouslySetInnerHTML={({__html: config.aboutTitle})}/>
                        </div>
                        <div className='col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 self-center lg:line-clamp-6'>
                            <p className='dark:text-white'>{
                                config.aboutDescription
                            }</p>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer/>
            <ContactDialog/>
        </>
    );
}