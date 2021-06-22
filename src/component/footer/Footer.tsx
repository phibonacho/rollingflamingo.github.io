import * as React from "react";

import "./footer.scss";
import TextLogoWhite from "../graphics/TextLogoWhite";
import NavMenu from "../navbar/NavMenu";

export interface IFooterProps {

}

export default class Footer extends React.Component<IFooterProps, {}> {
  public render() {
    return <footer className="bg-blue w-full">
      <div className="max-w-screen-2xl p-16 m-auto">
        <div className="grid grid-cols-3 gap-0.5">
          <div className='col-span-1 self-center'>
            <TextLogoWhite/>
          </div>
          <div className='col-span-1 self-center'>

          </div>
          <div className='col-span-1 self-center'>
            <NavMenu
              vertical
              entries={[
              {
                title: "Projects",
                link: "#Projects"
              },
              {
                title: "About",
                link: "#About"
              }
            ]}/>
          </div>
        </div>
      </div>
    </footer>;
  }
}
