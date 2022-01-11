import * as React from "react";
import IHeroBannerProps, {IHeroBannerState} from "./IHeroBanner";

import './hero-banner.scss';
import CloudTriangleMd from "../graphics/CloudTriangleMd";
import Me from "../../media/images/cloud-me.webp";
import SvgCloudTriangleLg from "../graphics/CloudTriangleLg";
import {ContactButton} from "../contactDialog/ContactDialog";

let description: string = "Frontend developer, Humanities computing student and plant enthusiast. Always looking for new technologies and frameworks to mess up my projects. This is my portfolio, please don't leave! I don't ask for cookies!";

export default class HeroBanner extends React.Component<IHeroBannerProps, IHeroBannerState> {
  public render() {
    return <div className="hero-banner" role='banner'>
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
            className : 'hidden lg:block'
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
          <img id='me' src={Me} alt="me in pain" decoding={'async'}/>
        </div>
      </div>
    </div>;
  }
}
