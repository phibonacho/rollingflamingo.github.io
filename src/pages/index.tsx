import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {fetchProjects} from "../services";
import HeroBanner from "../component/hero-banner/HeroBanner";
import Section from "../component/section/Section";
import FullWidthProject from "../component/projects/FullWIdthProject";
import Experience from "../component/timeline/Experience";
import React, {ForwardedRef, PropsWithChildren, RefObject, useEffect, useRef} from "react";
import {ProjectElement} from "../services/model/ProjectElement";
import {motion} from "framer-motion";

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {projects} = props;
    const expRef = useRef<any>(null);


    return <main className={'mt-[30px] md:mt-0'}>
        <HeroBanner/>
        <Section id={'projects'} title={'Projects'} fullWidth>
            {
                projects.map((p: ProjectElement, i: number) => <FullWidthProject key={i} {...p}/>)
            }
        </Section>
        <Section ref={expRef} id={"about"} title={"About me"}>
            <div className="flex flex-row flex-wrap">
                <div id="first-exp" className='flex xl:order-3 xl:flex-1-33 flex-full justify-center xl:justify-start'>
                    <ScrollAnimate priority={0}>
                        <Experience
                            className="md:mr-64 xl:mr-0"
                            name="Backend developer"
                            period="January 2019 - July 2019"
                            faculty="Wikicasa"
                            description="Development and maintenance of SOAP/REST services to data gathering for a real estate italian portal."
                        />
                    </ScrollAnimate>
                </div>
                <div id="second-exp"
                     className='flex xl:order-1 md:order-3 xl:justify-end justify-center xl:flex-2-50 md:flex-1-60 flex-full'>
                    <ScrollAnimate priority={1}>
                        <Experience
                            variant={2}
                            name="Fullstack developer"
                            period="July 2019 - November 2020"
                            faculty="Wikicasa"
                            description="After my internship as backend developer, I started to develop also small page sections and frontend logic."
                        />
                    </ScrollAnimate>
                </div>
                <div id="third-exp"
                     className='flex xl:order-4 md:order-2 flex-full xl:flex-auto md:flex-1-40 md:justify-end md:self-center justify-center'>
                    <ScrollAnimate priority={2}>
                        <Experience
                            name="Computer Science Bachelor Degree"
                            period="30 March 2020"
                            faculty="Università degli studi di Genova"
                            description=""
                            certificate
                        />
                    </ScrollAnimate>
                </div>
                <div id="fourth-exp"
                     className='flex justify-center xl:order-2 md:order-4 xl:justify-start xl:flex-2-50 flex-full'>
                    <ScrollAnimate priority={3}>
                        <Experience
                            className="md:ml-32 xl:ml-0"
                            name="Frontend developer"
                            period="December 2020 - August 2021"
                            faculty="Reply Cluster"
                            description="In Reply cluster I consolidated my interest in frontend development, implementing more complex solution for intranets."
                            variant={3}
                        />
                    </ScrollAnimate>
                </div>
                <div id="fifth-exp" className='flex order-5 xl:flex-1-33 flex-full justify-center'>
                    <ScrollAnimate priority={4}>
                        <Experience
                            className="md:mr-72 xl:mr-0"
                            name="Frontend Developer"
                            period="September 2021 - Now"
                            faculty="Reply Bitmama"
                            description="In Bitmama I'm focusing on accessibility, in order to make page work with the most common assistive technologies. "
                            variant={4}
                        />
                    </ScrollAnimate>
                </div>
            </div>
        </Section>
        <Section id={"about-me"} title='About me' srOnly>
            <div className='grid grid-cols-12 gap-4'>
                <div
                    className='col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 text-center md:text-right self-center'>
                    <h3 className='font-bold text-5xl text-obsidian dark:text-white pb-4'>Keep<br/>on<br/>learning</h3>
                </div>
                <div className='col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9 self-center lg:line-clamp-6'>
                    <p className='dark:text-white'>I'm a former computer science student keen on illustration and
                        nature. I've always been curious about how things works and how they are built, computer science
                        gave me the chance to widen this interest from mechanical world to computer's one. Problem
                        solving shouldn't be limited to solve a problem by providing the answer or a solution, it should
                        include creating a framework for the users to use for recognizing and overcome similar issues, a
                        solution that grows and improves with the user, for the user.</p>
                </div>
            </div>
        </Section>
    </main>;
};

const ScrollAnimate = React.forwardRef<HTMLElement, PropsWithChildren<{ priority: number }>>
(({
      priority,
      children
  }, ref) => {
    const root = ref as RefObject<any>;
    return <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                       viewport={{root}} transition={{type: "spring", stiffness: 100, mass: .75, delay: priority * .2}}>
        {children}
    </motion.div>
});

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=3600, stale-while-revalidate=1800'
    );

    return {
        props: {
            ...await fetchProjects(),
        },
    };
};

export default Home;