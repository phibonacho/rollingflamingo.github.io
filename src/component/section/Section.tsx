import {FC} from 'react';
import ISectionProps from "./ISection";

import styles from './section.module.scss';

const Section: FC<ISectionProps> = (props) => {
    const {section} = styles;
    const {id, fullWidth, srOnly, title, children} = props;
    return <section id={id}
                    className={[
                        section,
                      ...(fullWidth ? [""] : ["max-w-screen-xxl mx-auto px-4 lg:px-8"])
                    ].join(" ")}
                    aria-labelledby={`${id}-title`}
                    role="article"
                    tabIndex={-1}>
      <h2 className={[
        "text-5xl font-semibold text-obsidian dark:text-white my-10",
        ...(srOnly ? ["hidden"] : []),
        ...(fullWidth ? ["max-w-screen-xxl mx-auto pl-28"] : ["md:ml-20"])
      ].join(" ")} id={`${id}-title`}>{ title }</h2>
      { children }
    </section>;
}

export default Section;
