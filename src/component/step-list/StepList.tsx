import * as React from "react";
import IMilestoneProps, {IMilestoneState} from "./IStepList";
import './step-list.scss';

export default class StepList extends React.Component<IMilestoneProps, IMilestoneState> {

  public componentDidMount() {
    console.log(this.props.steps);
  }

  public render() {
    return (
      <div className={'milestone'}>
        <ul>
          {this.props.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    );
  }
}
