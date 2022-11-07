import React, {useEffect, useRef, useState} from 'react';
import styles from "./fwProject.module.scss";

import ProjectDecorationUp from "../graphics/ProjectDecorationUp";
import ProjectDecorationDown from "../graphics/ProjectDecorationDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ProjectElement} from "../../services/model/ProjectElement";
import Image from "next/image";
import {PortableText} from "@portabletext/react";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import useTransforms from "../hooks/useTransforms";

export interface IFullWidthProject extends ProjectElement {
}

export default function FullWidthProject({theme, title, caption, image, tags, link, description}: IFullWidthProject) {
    const imageRef = useRef(null);
    const {'project-image': projectImage} = styles;
    const {scrollYProgress} = useScroll({target: imageRef, offset: ["start end", "end start"]});

    const [scale, rotate, y, rotate1, y1, rotate2, y2] = useTransforms(scrollYProgress,
        [1.2, 1],
        [-15, 0], [-20, 20],
        [-10, 10], [-40, 30],
        [10, -10], [30, -30]
    );


    let colors = {
        background: `${theme}` || 'white',
        text: theme ? `${theme}-darkest` : 'obsidian',
        upperDecoration: theme ? 'white' : 'muted-light',
        lowerDecoration: theme ? `${theme}-dark` : 'obsidian'
    };

    return <article
        id={`${title}-section`}
        className={`full-width-project bg-${colors.background} dark:bg-transparent overflow-hidden  px-3 md:px-0`}
        aria-labelledby={`${title}-title`}>
        <div
            className="min-h-screen xl:max-w-screen-xxl lg:max-w-screen-md mx-auto px-2 py-20 md:p-20  flex flex-row flex-wrap items-center">
            <div className="xl:order-2 flex-auto xl:flex-1-60 flex flex-col xl:pl-32 pb-20 relative">
                <motion.div style={{rotate, y, scale}}>
                    <div ref={imageRef} className={projectImage}>
                        <Image src={image} alt={caption} width={1920} height={1080}/>
                    </div>
                </motion.div>
                <motion.div style={{ rotate: rotate1, y: y1, top: 0, right: 120, position: 'absolute'}}>
                    <ProjectDecorationUp viewBox="0 0 221 209"
                                         className={`project-ud hidden md:block fill-current text-${colors.upperDecoration}`}
                                         />
                </motion.div>
                <motion.div style={{rotate: rotate2, y: y2, bottom: 90, right: 120, position: 'absolute'}}>
                    <ProjectDecorationDown viewBox="0 0 136 138"
                                           className={`project-dd hidden md:block fill-current text-${colors.lowerDecoration}`}
                                           />
                </motion.div>
            </div>
            <div
                className={`flex-auto xl:flex-1-40 xl:max-w-[40%] flex flex-col text-${colors.text} dark:text-${colors.background} md:tracking-widest`}>
                <div className="flex-1-60 md:text-xl">
                    <PortableText value={description}/>
                </div>
                <h3 className="my-8 text-6xl md:text-7xl uppercase font-semibold"
                    id={`${title}-title`}>{title}
                    <a href={link} rel="noreferrer" target="_blank" className="text-2xl align-top"
                       title={`Visit ${title} in another tab`} aria-label={`Visit ${title} in another tab`}><span
                        className="hidden">open link in a new tab</span><FontAwesomeIcon
                        icon={["fas", "external-link-square-alt"]} className="mx-1"/></a></h3>
                <ul className={`grid grid-cols-6 gap-4 border-t-4 border-${colors.text} dark:border-${colors.background} py-5 max-w-[390px]`}>
                    {tags.map((li, i) =>
                        <li key={i}
                            className={`flex flex-col justify-start text-base font-semibold uppercase`}
                            style={({overflowWrap: 'break-word'})}
                            dangerouslySetInnerHTML={({__html: li})}>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </article>;
}