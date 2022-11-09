import * as React from "react";
import IHeroBannerProps from "./IHeroBanner";

import styles from './hero-banner.module.scss';
import Test from "/public/media/images/icloud_ - 1 (1).png";
import {ContactButton} from "../contactDialog/ContactDialog";
import {motion, useScroll} from "framer-motion";
import Image from "next/image";
import ProjectDecorationUp from "../graphics/ProjectDecorationUp";
import ProjectDecorationDown from "../graphics/ProjectDecorationDown";
import useTransforms from "../hooks/useTransforms";
import {useRef} from "react";

let description: string = "Frontend developer, Humanities computing student and plant enthusiast. Always looking for new technologies and frameworks to mess up my projects. This is my portfolio, please don't leave! I don't ask for cookies!";

const HeroBanner = (props: IHeroBannerProps) => {
    const {
        container,
        content__grid,
        content__wrapper,
        content__title,
        content__description,
        content__cta,
        content__image,
        image__mask,
        background
    } = styles;
    const imageRef = useRef(null);
    const {scrollYProgress} = useScroll({target: imageRef, offset: ["start center", "end start"]});
    const [scale, y, rotate1, y1, rotate2, y2] = useTransforms(scrollYProgress,
        [1.1, 1], [20, 0],
        [-10, 10], [-40, 30],
        [45, 30], [30, -30]
    );

    return <header className={container}>
        <div className={content__grid}>
            <div className={content__wrapper}>
                <h1 className={content__title}>It's-a me, Andreo!</h1>
                <p className={content__description}>{description}</p>
                <div className={content__cta}>
                    <ContactButton cta={"Let's get in touch!"}/>
                </div>

            </div>
            <div className={content__image}>
                <motion.div style={{y, scale}}>
                    <div ref={imageRef} className={image__mask}>
                        <Image src={Test} alt={'test'} width={1920} height={1080}/>
                    </div>
                </motion.div>
                <motion.div className={'hidden lg:block'} style={{rotate: rotate1, y: y1, top: 0, right: 75, position: 'absolute'}}>
                    <ProjectDecorationUp viewBox="0 0 221 209"
                                         className={`fill-current text-blue`}/>
                </motion.div>
                <motion.div className={'hidden lg:block'} style={{rotate: rotate2, y: y2, bottom: 30, right: 120, position: 'absolute'}}>
                    <ProjectDecorationDown viewBox="0 0 136 138"
                                           className={`fill-current text-blue-darkest`}
                    />
                </motion.div>
            </div>
        </div>
        <Image className={background} src={Test} alt={'test'} width={414} height={869}/>
    </header>;
}

export default HeroBanner;
