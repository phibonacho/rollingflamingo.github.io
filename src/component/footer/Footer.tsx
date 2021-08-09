import * as React from "react";

import "./footer.scss";
import TextLogoWhite from "../graphics/TextLogoWhite";
import NavMenu from "../navbar/NavMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export interface IFooterProps {

}

export default class Footer extends React.Component<IFooterProps, {}> {
  public render() {
    return <footer className="bg-blue w-full">
      <div className="max-w-screen-xxl pt-16 pb-6 px-8 lg:px-16 m-auto">
        <div className="grid grid-cols-3 gap-0.5">
          <div className='col-span-3 md:col-span-1 self-center'>
            <TextLogoWhite className="mx-auto"/>
          </div>
          <div className='col-span-3 md:col-span-1 self-center'>

          </div>
          <div className='col-span-3 md:col-span-1 self-center'>
            <NavMenu
              vertical
              entries={[
              {
                title: "Projects",
                link: "#Projects",
                scroll: true,
              },
              {
                title: "About",
                link: "#About",
                scroll: true
              }
            ]}/>
          </div>
        </div>
        <div className="text-center mt-9">
          <p className="text-obsidian">Made with
            <FontAwesomeIcon icon={["fas", "heart"]} className="text-white mx-1"/>
            by
            <a href="https://github.com/rollingflamingo" className="font-semibold text-dark"> rollingflamingo</a>
          </p>
        </div>
      </div>
    </footer>;
  }
}