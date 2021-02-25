import * as React from "react";
import IHeroBannerProps, {IHeroBannerState} from "./IHeroBanner";

import './hero-banner.scss';
import ThemeContext from "../theme/ThemeContext";

export default class HeroBanner extends React.Component<IHeroBannerProps, IHeroBannerState> {
  static contextType = ThemeContext;

  public render() {
    return <div className={`hero-banner ${this.context.theme}`}>
      <div className={'left-container'}>
        {this.props.leftContent}
      </div>
      <div className={'right-container'}>
        {this.props.rightContent}
      </div>
    </div>;
  }
}
