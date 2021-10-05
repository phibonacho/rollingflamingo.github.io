import * as React from 'react';
import IToggleProps, {IToggleState} from "./IToggle";

import './toggle.scss';
import ThemeContext from "../theme/ThemeContext";
import {ChangeEvent} from "react";

export default class Toggle extends React.Component<IToggleProps, IToggleState>{
  static contextType = ThemeContext;

  constructor(props: IToggleProps) {
    super(props);
    this.state = {
      checked: false,
      delayChecked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (<div className={`toggle ${this.context.theme}`}>
      <input type="checkbox" id={this.props.id} checked={this.state.checked} onChange={this.handleClick} />
      {this.renderLabel()}
    </div>);
  }

  protected renderLabel(children?: JSX.Element) {
    return (<label htmlFor={this.props.id}>
      {children}
    </label>);
  }

  private handleClick(e: ChangeEvent) {
    if(!this.props.delay)
      this.setState({
        checked: !this.state.checked
      }, this.props.onClick)
    else {
      this.setState({
        delayChecked: !this.state.delayChecked
      }, () => {
        setTimeout(() => {
          this.setState({
            checked: !this.state.checked
          }, this.props.onClick)
        }, this.props.delay);
      })
    }
  }

}
