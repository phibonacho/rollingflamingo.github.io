import * as React from "react";
import IHeroBannerProps from "./IHeroBanner";

import styles from './hero-banner.module.scss';
import CloudTriangleMd from "../graphics/CloudTriangleMd";
import Me from "/public/media/images/cloud-me.webp";
import SvgCloudTriangleLg from "../graphics/CloudTriangleLg";
import {ContactButton} from "../contactDialog/ContactDialog";
import Image from "next/image";

let description: string = "Frontend developer, Humanities computing student and plant enthusiast. Always looking for new technologies and frameworks to mess up my projects. This is my portfolio, please don't leave! I don't ask for cookies!";

const HeroBanner = (props: IHeroBannerProps) => {
    const {'hero-banner': heroBanner} = styles;
    return <div className={heroBanner} role='banner'>
        <div className="col-span-7 md:col-span-6 p-10 lg:p-20 self-center mx-auto">
            <div className="flex flex-col justify-between sm:h-full xl:h-96">
                <div className="title-wrapper">
                    <CloudTriangleMd className="fill-current text-blue dark:text-obsidian xl:hidden"/>
                    <h1 className="text-4xl lg:text-5xl text-obsidian dark:text-blue font-bold">It's-a me, Andreo!</h1>
                </div>
                <p className="text-base text-dark dark:text-white xl:line-clamp-5 mx-10 my-10 md:hidden">
                    {
                        description
                    }
                </p>
                <ContactButton cta={"Let's get in touch!"} attrs={{
                    className: 'sm:hidden lg:block'
                }}/>
            </div>
        </div>
        <div className="hidden md:block md:col-span-6 p-10 lg:p-20 self-center">
            <div className="hidden md:flex md:flex-col xl:hidden">
                <p className="text-base text-dark dark:text-white line-clamp-7 m-10">
                    {
                        description
                    }
                </p>
                <ContactButton cta={"Let's get in touch!"}/>
            </div>
            <div className="hidden xl:block relative cloud-image">
                <SvgCloudTriangleLg className="fill-current text-blue" id={'triangle'}/>
                <Image id='me' src={Me} alt="me in pain" decoding={'async'}/>
            </div>
        </div>
    </div>;
}

export default HeroBanner;
