import {createRef, RefObject, useEffect, useState} from "react";
import {gsap} from 'gsap';
import INavbarProps from "./IHeader";
import styles from './header.module.scss';

export const Header = (props: INavbarProps) => {
  const {'main-container': mainContainer, 'left-container': leftContainer, 'right-container': rightContainer, 'custom-navbar': customNavbar} = styles;
  const {leftContent, rightContent} = props;

  const selector: RefObject<HTMLHeadElement> = createRef();
  const [ color, setColor ] = useState('');

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: light)");
    setColor(matchMedia.matches? '255, 255, 255' : '24, 24, 27');
    matchMedia.addEventListener('change', e => {
      setColor(e.matches ? '255, 255, 255' : '24, 24, 27');
    });
  });

  return (
      <nav ref={selector} className={customNavbar} style={{ backgroundColor: `rgba(${color}, 0)`}}>
        <div className={mainContainer}>
          <div className={leftContainer}>
            { leftContent }
          </div>
          <div className={rightContainer}>
            {  rightContent }
          </div>
        </div>
      </nav>);
}
