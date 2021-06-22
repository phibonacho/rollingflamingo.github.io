import * as React from "react";
import IHeroBannerProps, {IHeroBannerState} from "./IHeroBanner";

import './hero-banner.scss';

export default class HeroBanner extends React.Component<IHeroBannerProps, IHeroBannerState> {

  public render() {
    return <div className="m-auto max-w-screen-2xl box-border h-screen grid grid-cols-2">
      <div className="col-auto p-20 self-center">
        {this.props.leftContent}
      </div>
      <div className="col-auto p-20 self-center">
        {this.props.rightContent}
      </div>
    </div>;
  }
}
