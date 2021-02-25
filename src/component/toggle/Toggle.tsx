import * as React from 'react';
import IToggleProps, {IToggleState} from "./IToggle";

import './toggle.scss';
import ThemeContext from "../theme/ThemeContext";

export default class Toggle extends React.Component<IToggleProps, IToggleState>{
  static contextType = ThemeContext;

  constructor(props: IToggleProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<div className={`toggle ${this.context.theme}`}>
      <input type="checkbox" id={this.props.id} onClick={this.props.onClick} />
      <label htmlFor={this.props.id}/>
    </div>);
  }



}
