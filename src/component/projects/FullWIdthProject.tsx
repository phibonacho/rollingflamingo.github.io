import React, {useEffect, useRef} from 'react';
import styles from "./project.module.scss";

import ProjectDecorationUp from "../graphics/ProjectDecorationUp";
import ProjectDecorationDown from "../graphics/ProjectDecorationDown";
import {ProjectElement} from "../../services/model/ProjectElement";
import Image from "next/image";
import {PortableText} from "@portabletext/react";
import {motion, useScroll} from "framer-motion";
import useTransforms from "../hooks/useTransforms";
import {LinkIcon} from "@heroicons/react/20/solid";

export interface IFullWidthProject extends ProjectElement {
}

export default function FullWidthProject({theme, title, caption, image, tags, link, description}: IFullWidthProject) {
    const imageRef = useRef(null);
    const {
        'project-image': projectImage,
        container,
        content__wrapper,
        content__info,
        content__image,
        content__title,
        content__description
    } = styles;
    const {scrollXProgress} = useScroll({target: imageRef, offset: ["start end", "end start"]});

    const [scale, rotate, rotate1, y1, rotate2, y2] = useTransforms(scrollXProgress,
        [1.1, 1], [-15, 0],
        [-10, 10], [-40, 30],
        [10, -10], [30, -30]
    );


    let colors = {
        background: `${theme}` || 'white',
        text: theme ? `${theme}-darkest` : 'obsidian',
        upperDecoration: theme ? 'white' : 'muted-light',
        lowerDecoration: theme ? `${theme}-dark` : 'obsidian'
    };

    useEffect(() => {
    }, []);

    const image_animation = {
        far: {
            rotate: -15, y: 100, scale: .7
        },
        near: {
            rotate: 0, y: 0, scale: 1
        }
    }

    const decorations = {
        far: (i: number) => ({
            rotate: i * 10,
            y: i * 30
        }),
        near: (i: number) => ({
            rotate: i * -10,
            y: i * -30,
            transition: {stiffness: 75, duration: .4}
        })
    }

    return <article id={`${title}-section`} className={container}>
        <div className={[content__wrapper, styles[`content__wrapper--${theme}`]].join(' ')}>
            <div className={content__image}>
                <motion.div variants={image_animation} initial={"far"} animate={"near"}
                            transition={{stiffness: 75, duration: .3}}>
                    <div ref={imageRef} className={projectImage}>
                        <Image src={image} alt={caption} width={1920} height={1080}/>
                    </div>
                </motion.div>
                <motion.div custom={1} variants={decorations} initial={"far"} animate={"near"} style={{top: 0, right: 120, position: 'absolute'}}>
                    <ProjectDecorationUp viewBox="0 0 221 209"
                                         className={`project-ud hidden xl:block fill-current text-${colors.upperDecoration}`}
                    />
                </motion.div>
                <motion.div custom={-1} variants={decorations} initial={"far"} animate={"near"} style={{bottom: 90, right: 120, position: 'absolute'}}>
                    <ProjectDecorationDown viewBox="0 0 136 138"
                                           className={`project-dd hidden xl:block fill-current text-${colors.lowerDecoration}`}
                    />
                </motion.div>
            </div>
            <div className={[content__info].join(' ')}>
                <a href={link} rel="noreferrer" target="_blank" className="text-2xl align-top">
                    <span className="hidden">open link in a new tab</span>
                    <h3 className={content__title} id={`${title}-title`}>{title} <LinkIcon className={'fill-current h-12 w-12 inline-block'}/></h3>
                </a>
                <div className={content__description}>
                    <PortableText value={description}/>
                </div>
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