import Experience from "./Experience";
import Section from "../section/Section";
import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";

export default function AboutSection(props: {}) {
    const mobileMedia = window.matchMedia(`(max-width: 576px)`);
    const sectionRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        let mobile = mobileMedia.matches;
        const { current } = sectionRef;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: current,
                start: 'top bottom',
                end: mobile ? 'bottom center' : 'top 80px',
                scrub: .1,
                refreshPriority: 0
            }
        });

        if(mobile)
            tl.from('#first-exp', { y: 60, scale: .8, opacity: 0 } )
                .from('#second-exp', { y:40, scale: .8, opacity: 0 })
                .from('#third-exp', { y:40, scale: .8, opacity: 0 })
                .from('#fourth-exp', { y:40, scale: .8, opacity: 0 })
                .from('#fifth-exp', { y: 60, scale: .8, opacity: 0 });
        else
            tl.from('#first-exp', { y: 60, scale: .8, opacity: 0 })
                .from('#second-exp', { y:40, scale: .8, opacity: 0 },  0)
                .from('#third-exp', { y:40, scale: .8, opacity: 0 },  .2)
                .from('#fourth-exp', { y:40, scale: .8, opacity: 0 }, .4)
                .from('#fifth-exp', { y: 60, scale: .8, opacity: 0 },  .6);

    }, []);

    return <Section id={"about"} title={"About me"}>
        <div className="flex flex-row flex-wrap" ref={sectionRef}>
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
            <div id="fourth-exp" className='flex justify-center xl:order-2 md:order-4 xl:justify-start xl:flex-2-50 flex-full'>
                <Experience
                    className="md:ml-32 xl:ml-0"
                    name="Frontend developer"
                    period="December 2020 - August 2021"
                    faculty="Reply Cluster"
                    description="In Reply cluster I consolidated my interest in frontend development, implementing more complex solution for intranets."
                    variant={3}
                />
            </div>
            <div id="fifth-exp" className='flex order-5 xl:flex-1-33 flex-full justify-center'>
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
}