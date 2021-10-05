import React from 'react';

import "./fwProject.scss";

import ProjectDecorationUp from "../graphics/ProjectDecorationUp";
import ProjectDecorationDown from "../graphics/ProjectDecorationDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface IFullWidthProject {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
    theme?: 'blue' | 'pink' | 'purple' | 'teal' | 'yellow';
}

export default function FullWidthProject(props: IFullWidthProject) {
    let colors = {
        background: props.theme || 'white',
        text: props.theme ? `${props.theme}-darkest` : 'obsidian',
        upperDecoration: props.theme? 'white' : 'muted-light',
        lowerDecoration: props.theme? `${props.theme}-dark` : 'obsidian'
    };

    return <article className={`full-width-project bg-${colors.background}`} id={`${props.title}-section`} aria-labelledby={`${props.title}-title`}>
        <div className="min-h-screen xl:max-w-screen-xxl lg:max-w-screen-md mx-auto px-2 py-20 md:p-20  flex flex-row flex-wrap items-center">
            <div className="xl:order-2 flex-auto xl:flex-1-60 flex flex-col xl:pl-32 pb-20 relative">
                <div className="project-image" style={({ backgroundImage: `url(${props.image})`})}>
                </div>
                <ProjectDecorationUp viewBox="0 0 221 209" className={`hidden md:block fill-current text-${colors.upperDecoration} absolute`} style={({ top: 0, right: 120 })} />
                <ProjectDecorationDown viewBox="0 0 136 138" className={`hidden md:block absolute fill-current text-${colors.lowerDecoration}`} style={({ bottom: 90, right: 120 })}/>
            </div>
            <div className={`flex-auto xl:flex-1-40 flex flex-col text-${colors.text} md:tracking-widest`}>
                <p className="flex-1-60 text-xl">
                    { props.description }
                </p>
                <h3 className="my-8 text-6xl md:text-7xl uppercase font-semibold" id={`${props.title}-title`}>{props.title}
                <a href={props.link} rel="noreferrer" target="_blank" className="text-2xl align-top" title={`Visit ${props.title} in another tab`} aria-label={`Visit ${props.title} in another tab`}><span className="hidden">open link in a new tab</span><FontAwesomeIcon icon={["fas", "external-link-square-alt"]} className="mx-1"/></a></h3>
                <ul className={`w-max flex flex-row flex-wrap justify-between border-t-4 border-${colors.text} py-5`}>
                    { props.tags.map((li, i) =>
                        <li key={i}
                            className={`flex flex-col justify-center text-base font-semibold uppercase ${i === 0 ? '' : 'ml-14'}`}
                            style={({ overflowWrap: 'break-word' })}
                            dangerouslySetInnerHTML={({__html: li})}>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </article>;
}