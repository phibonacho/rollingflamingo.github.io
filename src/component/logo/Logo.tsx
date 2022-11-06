import {useEffect, useState} from "react";

import TextLogo from "../graphics/TextLogo";
import TextLogoSemiDark from "../graphics/TextLogoSemiDark";
import * as React from "react";
import TextLogoWhite from "../graphics/TextLogoWhite";

export interface ILogoProps {
    white?: boolean;
    attrs?: React.SVGProps<SVGSVGElement>;
}

export const Logo = (props: ILogoProps) => {

    const [ renderLogo, setRenderLogo ] = useState(<TextLogo {...props.attrs} />);

    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: light)");
        setRenderLogo(matchMedia.matches
            ? (props.white ? <TextLogoWhite {...props.attrs}/> : <TextLogo {...props.attrs} />)
            : <TextLogoSemiDark {...props.attrs} />)
        matchMedia.addEventListener('change', e => {
            setRenderLogo(e.matches
                ? (props.white ? <TextLogoWhite {...props.attrs}/> : <TextLogo {...props.attrs} />)
                : <TextLogoSemiDark {...props.attrs} />);
        });
    }, []);

    return renderLogo;
};