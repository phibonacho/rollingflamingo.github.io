import * as React from 'react';
import ISectionProps, {ISectionState} from "./ISection";

import './section.scss';

export default class Section extends React.Component<ISectionProps, ISectionState> {

  public render() {
    return <section id={this.props.id}
                    className={[
                        "section",
                      ...(this.props.fullWidth ? [""] : ["max-w-screen-xxl mx-auto px-4 lg:px-8"])
                    ].join(" ")}
                    aria-labelledby={`${this.props.id}-title`}
                    role="article">
      <h2 className={[
        "text-5xl font-semibold text-obsidian dark:text-light my-10",
        ...(this.props.srOnly ? ["hidden"] : []),
        ...(this.props.fullWidth ? ["max-w-screen-xxl mx-auto pl-28"] : ["md:ml-20"])
      ].join(" ")} id={`${this.props.id}-title`}>{ this.props.title }</h2>
      { this.props.children }
    </section>;
  }
}
