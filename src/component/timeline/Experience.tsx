import * as React from "react";

import styles from "./experience.module.scss";
import Variant5 from "../graphics/Variant5";
import Variant1 from "../graphics/Variant1";
import Variant2 from "../graphics/Variant2";
import Variant3 from "../graphics/Variant3";
import Variant4 from "../graphics/Variant4";
import {useMemo, useRef} from "react";

export interface IExperienceProps {
    name: string;
    period: string;
    description: string;
    faculty: string;
    certificate?: boolean
    variant?: number;
    className?: string;
}

const Experience = (props: IExperienceProps) => {
    const {wrapper, 'wrapper--certificate': wrapperCertificate, "info-wrapper": infoWrapper} = styles;
    const {certificate, variant, period, description, faculty, name, className = ''} = props;
    const decoration = useMemo(() => {
        if (certificate)
            return <Variant5 className="fill-current text-pink dark:text-zinc-800"
                             style={{position: "absolute", top: 0, left: 0}}/>;

        switch (variant) {
            case 2:
                return <Variant2 className="fill-current text-blue dark:text-zinc-800"
                                 style={{position: "absolute", top: 0, left: 50}}/>;
            case 3:
                return <Variant3 className="fill-current text-blue dark:text-zinc-800"
                                 style={{position: "absolute", top: 0, left: 30}}/>;
            case 4:
                return <Variant4 className="fill-current text-blue dark:text-zinc-800"
                                 style={{position: "absolute", top: 50, left: 80}}/>;
            default:
                return <Variant1 className="fill-current text-blue dark:text-zinc-800"
                                 style={{position: "absolute", top: 30, left: 60}}/>;
        }
    }, [certificate, variant]);

    return <div
        className={`flex flex-row justify-end relative ${wrapper} ${certificate ? wrapperCertificate : ''} ${className}`}>
        {
            decoration
        }
        <div className={infoWrapper}>
        <span className={[
            "text-base",
            "text-obsidian dark:text-white",
            (certificate ? "font-regular" : "font-semibold"),
            "line-clamp-1"].join(" ")
        }>{period}</span>
            <h3 className={[
                    (certificate ? "text-xl" : "text-3xl"),
                    (certificate ? "dark:text-pink" : "dark:text-blue"),
                    "text-dark",
                    "font-semibold",
                    "line-clamp-2"].join(" ")
                }>{name}</h3>
            <p className="text-base text-dark dark:text-white line-clamp-4">
          <span className={[
              (certificate ? "text-xs" : "text-base"),
              "text-obsidian dark:text-light",
              "font-semibold"].join(" ")
          }>{faculty} </span>
                {description}
            </p>
        </div>
    </div>;
}

export default Experience;