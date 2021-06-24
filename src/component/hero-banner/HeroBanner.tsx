import * as React from "react";
import IHeroBannerProps, {IHeroBannerState} from "./IHeroBanner";

import './hero-banner.scss';
import CloudTriangleMd from "../graphics/CloudTriangleMd";
import Me from "../../media/images/cloud-me.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SvgCloudTriangleLg from "../graphics/CloudTriangleLg";

export default class HeroBanner extends React.Component<IHeroBannerProps, IHeroBannerState> {

  public render() {
    return <div className="m-auto max-w-screen-xxl box-border h-screen grid md:grid-cols-12 grid-cols-7">
      <div className="col-span-7 md:col-span-6 p-10 lg:p-20 self-center mx-auto">
        <div className="flex flex-col justify-between h-96 sm:h-full xl:h-96">
          <div className="title-wrapper">
            <CloudTriangleMd className="fill-current text-blue xl:hidden"/>
            <h1 className="text-4xl lg:text-5xl text-obsidian font-bold">It's-a me, Andreo!</h1>
          </div>
          <p className="text-base text-dark xl:line-clamp-5 mx-10 hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien risus, a maximus justo malesuada id. Aenean congue facilisis massa, et laoreet nisi fermentum vitae.
          </p>
          <ul className="flex xl:flex list-none justify-around pl-0 text-5xl mx-10 md:hidden">
            <li>
              <a href="https://github.com/rollingflamingo"><FontAwesomeIcon icon={["fab", "github"]} className="text-dark"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andrea-storace-73b9b9103/"><FontAwesomeIcon icon={["fab", "linkedin"]} className="text-dark"/></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block md:col-span-6 p-10 lg:p-20 self-center">
        <div className="hidden md:block xl:hidden">
          <p className="text-base text-dark line-clamp-5 m-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien risus, a maximus justo malesuada id. Aenean congue facilisis massa, et laoreet nisi fermentum vitae.
          </p>
          <ul className="flex list-none justify-around pl-0 text-5xl mx-10">
            <li>
              <a href="https://github.com/rollingflamingo"><FontAwesomeIcon icon={["fab", "github"]} className="text-dark"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andrea-storace-73b9b9103/"><FontAwesomeIcon icon={["fab", "linkedin"]} className="text-dark"/></a>
            </li>
          </ul>
        </div>
        <div className="hidden xl:block relative cloud-image">
          <SvgCloudTriangleLg className="fill-current text-blue" id={'triangle'}/>
          <img id='me' src={Me} alt="me in pain"/>
        </div>
      </div>
    </div>;
  }
}
