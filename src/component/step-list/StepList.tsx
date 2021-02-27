import * as React from "react";
import IMilestoneProps, {IMilestoneState} from "./IStepList";
import './step-list.scss';
import ThemeContext from "../theme/ThemeContext";

export default class StepList extends React.Component<IMilestoneProps, IMilestoneState> {
  static contextType = ThemeContext;

  public render() {
    return (
      <div className={`milestone${this.props.scrollable? ' scrollable ' : ' '}${this.context.theme}`}>
        <ul>
          {this.props.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    );
  }
}
