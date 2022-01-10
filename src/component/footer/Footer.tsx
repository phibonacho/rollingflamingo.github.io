import * as React from "react";

import "./footer.scss";
import { NavMenu } from "../header/NavMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Logo} from "../logo/Logo";
import {ContactButton} from "../contactDialog/ContactDialog";

export interface IFooterProps {

}

export default function Footer(props: IFooterProps) {
  return <footer className="bg-blue dark:bg-zinc-800 w-full">
    <div className="max-w-screen-xxl sm:pt-16 pt-12 pb-6 px-8 lg:px-16 m-auto">
      <div className="grid grid-cols-3 gap-6 sm:gap-0.5">
        <div className='col-span-3 md:col-span-1 self-center order-3 sm:order-1'>
          { <Logo white attrs={{
            className: 'mx-auto'
          }}/> }
        </div>
        <div className='col-span-3 md:col-span-1 flex flex-row justify-center self-center order-1 sm:order-2'>
          <ContactButton cta='Contact me!'/>
        </div>
        <div className='col-span-3 md:col-span-1 self-center order-2 sm:order-3'>
          <NavMenu
              description={"Page sections"}
              vertical
              entries={[
                {
                  title: "Projects",
                  link: "#projects",
                  scroll: true,
                },
                {
                  title: "About",
                  link: "#about",
                  scroll: true
                }
              ]}/>
        </div>
      </div>
      <div className="text-center mt-9">
        <p className="text-obsidian dark:text-light">Made with
          <FontAwesomeIcon icon={["fas", "heart"]} className="text-white dark:text-blue mx-1"/>
          by
          <a href="https://github.com/rollingflamingo" className="font-semibold text-dark dark:text-white"> rollingflamingo</a>
        </p>
      </div>
    </div>
  </footer>;
}
