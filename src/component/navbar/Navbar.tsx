import React, {ForwardedRef, useCallback, useEffect, useState} from "react";
import CustomModal, {ClosableContent} from "../modals/CustomModal";
import Link from "next/link";
import {useRouter} from "next/router";

import styles from "./navbar.module.scss";
import {Logo} from "../logo/Logo";
import MenuDecoration from "../graphics/MenuDecoration";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";

export interface INavbar {
    links: Array<{label: string, url: string}>;
}

const Navbar = (props: INavbar) => {
    const {links} = props;

    const {
        wrapper,
        'wrapper--compressed': wrapperCompressed,
        body,
        logo,
        menu,
        menuButton,
        menuButton__decorator,
        menu__wrapper,
        menu__header,
        menu__list,
        'menu__list--flat': flat,
        menu__item,
        gradientText

    } = styles;

    const [renderMenu, setRenderMenu] = useState<any>(false);const router = useRouter();

    const styleLink = useCallback((to) => menu__item + ' ' + (to !== router.asPath ? "" : gradientText),
        [gradientText, menu__item, router]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: 1024px)`);
        const changeHandler = () => setRenderMenu(!mediaQuery.matches);

        setRenderMenu(!mediaQuery.matches);

        mediaQuery.addEventListener('change', changeHandler);

        return () => {
            mediaQuery.removeEventListener('change', changeHandler);
        };
    }, []);

    const Menu = React.forwardRef((props: ClosableContent, ref: ForwardedRef<HTMLDivElement>) => {
        const {closeFunction} = props;

        return <div className={menu} ref={ref}>
            <div className={menu__wrapper}>
                <div className={menu__header}>
                    <button className={menuButton} onClick={closeFunction}>
                        <XMarkIcon className={menuButton__decorator}/>
                        <span className="sr-only">Close navigation menu</span>
                    </button>
                </div>
                <ul className={menu__list}>
                    <li className={styleLink("/")} onClick={closeFunction}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    {
                        links.map((link, i) => (
                            <li key={i} className={styleLink(link.url)} onClick={closeFunction}>
                                <Link href={link.url}>{link.label}</Link>
                            </li>))
                    }
                </ul>
                <MenuDecoration className={'fill-current text-blue w-full dark:text-zinc-800 justify-self-end'}/>
            </div>
        </div>
    });

    return <nav className={[wrapper].join(' ')}>
        <div className={body}>
            <div className={logo}>
                <Link href="/">
                    <Logo className={'h-8 w-8'}/>
                    <span className={'sr-only'}>Andrea Storace Homepage</span>
                </Link>
            </div>
            {
                renderMenu
                    ? <CustomModal BodyContent={Menu} buttonCaption={<>
                        <Bars3Icon className={menuButton__decorator}/>
                        <span className="sr-only">Open navigation menu</span>
                    </>} buttonClassName={menuButton}/>
                    : <div className={menu}>
                        <ul className={menu + " " + flat}>
                            {
                                links.map((link, i) => (
                                    <li key={i} className={styleLink(link.url)}><Link
                                        href={link.url}>{link.label}</Link>
                                    </li>))
                            }
                        </ul>
                    </div>
            }
        </div>
    </nav>;
};

export default React.memo(Navbar);