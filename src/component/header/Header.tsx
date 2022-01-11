import {createRef, RefObject, useEffect, useState} from "react";
import {gsap} from 'gsap';
import INavbarProps from "./IHeader";
import './header.scss';

export const Header = (props: INavbarProps) => {
  const selector: RefObject<HTMLHeadElement> = createRef();
  const matchMedia = window.matchMedia("(prefers-color-scheme: light)");
  const [ color, setColor ] = useState(matchMedia.matches? '255, 255, 255' : '24, 24, 27');

  useEffect(() => {

    matchMedia.addEventListener('change', e => {
      setColor(e.matches ? '255, 255, 255' : '24, 24, 27');
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 100
      }
    });

    tl.to(selector.current, { backgroundColor: `rgba(${color}, 1)` })
  });

  return (
      <header ref={selector} className={`custom-navbar z-40`} style={{ backgroundColor: `rgba(${color}, 0)`}}>
        <div className={'main-container'}>
          <div className={'left-container'}>
            { props.leftContent }
          </div>
          <div className={'right-container'}>
            { props.rightContent }
          </div>
        </div>
      </header>);
  // }
}
