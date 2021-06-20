import * as React from 'react';
import ISectionProps, {ISectionState} from "./ISection";

import './section.scss';

export default class Section extends React.Component<ISectionProps, ISectionState> {

  public render() {
    return <section className={`custom-section`}>
      <h2>{ this.props.title }</h2>
      { this.props.children }
    </section>;
  }
}
