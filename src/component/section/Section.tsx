import * as React from 'react';
import ISectionProps, {ISectionState} from "./ISection";

import './section.scss';

export default class Section extends React.Component<ISectionProps, ISectionState> {

  public render() {
    return <section className="max-w-screen-xxl mx-auto mt-12 mb-20 px-4 lg:px-8 overflow-hidden">
      <h2 className="text-5xl font-semibold text-obsidian ml-20 my-10">{ this.props.title }</h2>
      { this.props.children }
    </section>;
  }
}
