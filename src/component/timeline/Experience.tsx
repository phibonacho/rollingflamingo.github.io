import * as React from "react";

import "./experience.scss";
import Variant5 from "../graphics/Variant5";
import Variant1 from "../graphics/Variant1";
import Variant2 from "../graphics/Variant2";
import Variant3 from "../graphics/Variant3";
import Variant4 from "../graphics/Variant4";

export interface IExperienceProps {
  name: string;
  period: string;
  description: string;
  faculty: string;
  certificate?: boolean
  variant?: number;
  className?: string;
}

export default class Experience extends React.Component<IExperienceProps, any> {

  private renderDecoration() {
    if(this.props.certificate)
      return <Variant5 className="fill-current text-pink dark:text-green" style={{ position: "absolute", top: 0, left: 0} }/>;

    switch (this.props.variant) {
      case 2:
        return <Variant2 className="fill-current text-blue dark:text-fuchsia" style={{ position: "absolute", top: 0, left: 50} }/>;
      case 3:
        return <Variant3 className="fill-current text-blue dark:text-fuchsia" style={{ position: "absolute", top: 0, left: 30} }/>;
      case 4:
        return <Variant4 className="fill-current text-blue dark:text-fuchsia" style={{ position: "absolute", top: 50, left: 80} }/>;
      default:
        return <Variant1 className="fill-current text-blue dark:text-fuchsia" style={{ position: "absolute", top: 30, left: 60} }/>;
    }
  }

  public render() {
    const { certificate } = this.props;
    return <div className={`flex flex-row justify-end relative experience ${certificate? 'certificate' : ''} ${this.props.className || ''}`}>
      {
        this.renderDecoration()
      }
      <div className="info-wrapper">
        <span className={[
          "text-base",
          "text-obsidian dark:text-light",
          (certificate? "font-regular" : "font-semibold"),
          "line-clamp-1"].join(" ")
        }>{this.props.period}</span>
        <h4 className={[
          (certificate? "text-xl" : "text-3xl"),
          "text-dark dark:text-white",
          "font-semibold",
          "line-clamp-2"].join(" ")
        }>{this.props.name}</h4>
        <p className="text-base text-dark dark:text-white line-clamp-4">
          <span className={[
            (certificate? "text-xs" : "text-base"),
            "text-obsidian dark:text-light",
            "font-semibold"].join(" ")
          }>{this.props.faculty} </span>
          {this.props.description}
        </p>
      </div>
    </div>;
  }
}