import {useEffect, useState} from "react";

import TextLogo from "../graphics/TextLogo";
import * as React from "react";
import NewLogo from "../graphics/NewLogo";
import NewLogoDark from "../graphics/NewLogoDark";

export interface ILogoProps extends React.SVGProps<SVGSVGElement>{}

export const Logo = ({...rest}: ILogoProps) => {

    const [ renderLogo, setRenderLogo ] = useState(<NewLogo {...rest} />);

    const updateLogo = (test: boolean) => {
        setRenderLogo(test
            ? <NewLogoDark {...rest} />
            : <NewLogo {...rest}/>)
    };

    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: light)");
        updateLogo(matchMedia.matches);
        matchMedia.addEventListener('change', e => {
            updateLogo(e.matches);
        });
    }, []);

    return renderLogo;
};