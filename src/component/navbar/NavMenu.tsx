import * as React from "react";
import "./navbar.scss";

export interface INavMenuProps {
  entries: {
    title: string;
    link: string;
    scroll?: boolean;
  }[];
  vertical?: boolean;
}

export default class NavMenu extends React.Component<INavMenuProps, {}>{

  public static clickHandler(event: any, link: string, scroll: boolean = false, modifier: number = 80) {
    event.preventDefault();
    if(scroll) {
      let target = document.querySelector(link);
      if (target) {
        window.scroll({
          top: (window.scrollY + target.getBoundingClientRect().y) - modifier,
          left: 0,
          behavior: "smooth"
        });
      }
    }
    else {
      window.open(link, "_blank")
    }
  }

  public render() {
    return <ul className={`nav-menu ${this.props.vertical? 'vertical' : ''}`}>
      {
        this.props.entries.map((entry, i) => <li key={i} className='nav-menu-item'>
          <a href={entry.link} onClick={(event) => NavMenu.clickHandler(event, entry.link, entry.scroll)}>{entry.title}</a>
        </li>)
      }
    </ul>;
  }
}
