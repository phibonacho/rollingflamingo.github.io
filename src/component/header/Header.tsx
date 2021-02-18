import * as React from "react";
import IHeaderProps, {IHeaderState} from "./IHeader";

import './headers.scss';

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  public render() {
    return <div className={'main-header'}>
      <div className={'left-container'}>
        {this.props.leftContent}
      </div>
      <div className={'right-container'}>
        {this.props.rightContent}
      </div>
    </div>;
  }
}
