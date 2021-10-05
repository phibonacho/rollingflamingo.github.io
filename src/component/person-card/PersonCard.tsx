import React from "react";
import IPersonCardProps, {IPersonCardState} from "./IPersonCard";
import './person-card.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ThemeContext from "../theme/ThemeContext";

export default class PersonCard extends React.Component<IPersonCardProps, IPersonCardState> {
  static contextType = ThemeContext;

  render() {
    return (
      <div className={`person-card ${this.context.theme}`}>
        <h1>{this.props.title}</h1>
        <div className={'description-content'}>
          {this.props.descriptions.map((description, i) => (
            <p key={i}>{description}</p>
          ))}
        </div>
        <div className={'lang-list'}>
          <ul>
            {this.props.featuredLinks.map((fl, i) =>
              (<li key={i}>
                <a href={fl.url}>
                  <FontAwesomeIcon icon={fl.icon}/>
                </a>
              </li>)
            )}
          </ul>
        </div>

      </div>
    );
  }
}
