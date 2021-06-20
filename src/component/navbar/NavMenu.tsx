import * as React from "react";
import "./navbar.scss";

export interface INavMenuProps {
  entries: {
    title: string;
    link: string;
  }[];
}

export default class NavMenu extends React.Component<INavMenuProps, {}>{
  public render() {
    return <ul className={'nav-menu'}>
      {
        this.props.entries.map((entry, i) => <li key={i} className='nav-menu-item'>
          <a href={entry.link}>{entry.title}</a>
        </li>)
      }
    </ul>;
  }
}
