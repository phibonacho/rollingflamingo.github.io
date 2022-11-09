import * as React from "react";
import IDisclaimerProps, {IDisclaimerState} from "./IDisclaimer";

import './disclaimer.scss'
import ThemeContext from "../theme/ThemeContext";

export default class Disclaimer extends React.Component<IDisclaimerProps, IDisclaimerState> {
  static contextType = ThemeContext;

  public render() {
    return (<div className={`disclaimer ${this.context.theme}`}>
      <div className={'disclaimer-navbar'}>
        <h2>{this.props.title}</h2>
      </div>
      <div className={'disclaimer-body'}>
        {this.props.children}
      </div>
    </div>);
  }
}
