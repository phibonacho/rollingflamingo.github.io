import * as React from 'react';
import ISectionProps from "./ISection";

import './section.scss';

const Section = React.forwardRef<HTMLElement, ISectionProps>((props: ISectionProps, ref) => {
    return <section id={props.id}
                    className={[
                        "section",
                      ...(props.fullWidth ? [""] : ["max-w-screen-xxl mx-auto px-4 lg:px-8"])
                    ].join(" ")}
                    aria-labelledby={`${props.id}-title`}
                    role="article"
                    tabIndex={-1}
                    ref={ref}>
      <h2 className={[
        "text-5xl font-semibold text-obsidian dark:text-white my-10",
        ...(props.srOnly ? ["hidden"] : []),
        ...(props.fullWidth ? ["max-w-screen-xxl mx-auto pl-28"] : ["md:ml-20"])
      ].join(" ")} id={`${props.id}-title`}>{ props.title }</h2>
      { props.children }
    </section>;
});

export default Section;
