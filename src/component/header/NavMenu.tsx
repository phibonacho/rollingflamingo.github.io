import * as React from "react";
import "./header.scss";

export interface INavMenuProps {
  description: string;
  entries: {
    title: string;
    link: string;
    scroll?: boolean;
  }[];
  vertical?: boolean;
}

const  clickHandler = (event: any, link: string, scroll: boolean = false, modifier: number = 80) => {
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
    window.open(link, "_blank");
  }
};

export const NavMenu = (props: INavMenuProps) => {
  return <div role="navigation" aria-label={props.description}>
    <ul className={`nav-menu ${props.vertical? 'vertical' : ''}`}>
      {
        props.entries.map((entry, i) => <li key={i} className='nav-menu-item'>
          <a href={entry.link} className="text-obsidian dark:text-white" onClick={(event) => clickHandler(event, entry.link, entry.scroll)} aria-label={entry.title}>{entry.title}</a>
        </li>)
      }
    </ul>
  </div>;
}
