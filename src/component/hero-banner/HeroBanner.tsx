import * as React from "react";
import IHeroBannerProps, {IHeroBannerState} from "./IHeroBanner";

import './hero-banner.scss';

export default class HeroBanner extends React.Component<IHeroBannerProps, IHeroBannerState> {

  public render() {
    return <div className={`hero-banner`}>
      <div className={'left-container col-8'}>
        {this.props.leftContent}
      </div>
      <div className={'right-container col-4'}>
        {this.props.rightContent}
      </div>
    </div>;
  }
}
