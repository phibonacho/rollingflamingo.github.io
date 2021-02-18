import * as React from "react";
import IDisclaimerProps, {IDisclaimerState} from "./IDisclaimer";

import './disclaimer.scss'

export default class Disclaimer extends React.Component<IDisclaimerProps, IDisclaimerState> {
  public componentDidMount() {
    console.log(this.props.children)
  }

  public render() {
    return (<div className={'disclaimer'}>
      <div className={'disclaimer-header'}>
        <h2>{this.props.title}</h2>
      </div>
      <div className={'disclaimer-body'}>
        {this.props.children}
      </div>
    </div>);
  }
}
