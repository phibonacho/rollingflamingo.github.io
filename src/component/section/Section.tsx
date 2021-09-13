import * as React from 'react';
import ISectionProps, {ISectionState} from "./ISection";

import './section.scss';

export default class Section extends React.Component<ISectionProps, ISectionState> {

  public render() {
    return <section id={this.props.id}
                    className="max-w-screen-xxl mx-auto mt-12 mb-20 px-4 lg:px-8 overflow-hidden"
                    aria-labelledby={`${this.props.id}-title`}
                    role="article">
      <h2 className={[
        "text-5xl font-semibold text-obsidian dark:text-light ml-20 my-10",
        ...(this.props.srOnly ? ["hidden"] : [])
      ].join(" ")} id={`${this.props.id}-title`}>{ this.props.title }</h2>
      { this.props.children }
    </section>;
  }
}
