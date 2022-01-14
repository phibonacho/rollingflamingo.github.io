import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {init, toggle} from "../../features/dialog/dialogSlice";
import React, {Fragment, useEffect, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ref = 'menu';

export interface IMenuProps {

}

export interface IMenuButton {
    attrs?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const MenuButton = (props: IMenuButton) => {
    const dispatch = useDispatch();
    const view = () => dispatch(toggle({
        ref: ref,
        show: true
    }));

    useEffect(() => {
        dispatch(init({
            ref: ref,
            show: false
        }))
    });

    let attrs = props.attrs || {};

    return <button className='px-16' title={'Open menu'} {...attrs} onClick={view}>
        <FontAwesomeIcon icon={["fas", "bars"]} className="text-obsidian"/>
        <span className={'sr-only'}>Open menu</span>
    </button>
}

export default function Menu(props: IMenuProps) {
    const show = useSelector((state: RootState) => state.dialog.dialogs)
        .find(d => d.ref === ref)?.show;
    const dispatch = useDispatch();
    const hide = () => dispatch(toggle({ ref: ref, show: false}));
    const closeButtonRef = useRef(null);

    return <Transition.Root show={!!show} as={Fragment}>
        <Dialog as="div" className="fixed z-100 inset-0 overflow-y-auto" initialFocus={closeButtonRef} onClose={hide}>
            <div className="flex items-center sm:items-end justify-center min-h-screen pt-4 px-4 pb-20 text-right sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div id='menu-backdrop' className="fixed inset-0 bg-blue-dark bg-opacity-75 dark:bg-zinc-800 dark:bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="ease-in duration-200"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div className="inline-block align-bottom bg-white dark:bg-zinc-900 text-left overflow-hidden shadow-xl transform transition-all sm:align-end sm:max-w-lg sm:w-full h-screen">
                        <div className="flex flex-row-reverse p-6 pb-2">
                            <button ref={closeButtonRef} onClick={hide} title="Close contact modal"><span className="sr-only">Close contact modal</span><FontAwesomeIcon icon={["fas", "times"]} className="text-obsidian"/></button>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-4 pt-0">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-obsidian dark:text-light">
                                        Let's get in touch!
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-obsidian dark:text-white">
                                            Reach me on Linkedin, Github or send me an email!
                                        </p>
                                        <ul className="flex flex-column flex-wrap justify-center items-center p-4 px-2 sm:px-8 sm:text-xl" aria-label="Contact options">
                                            <li className="w-full flex-full py-4 sm:px-4 flex flex-row items-center">
                                                <FontAwesomeIcon className="text-2xl sm:text-4xl dark:text-blue text-blue-darkest" icon={["fab", "linkedin"]}/>
                                                <a href="https://www.linkedin.com/in/andrea-storace-73b9b9103/" className="ml-4 text-obsidian dark:text-white">Andrea Storace</a></li>
                                            <li className="w-full flex-full py-4 sm:px-4 flex flex-row items-center">
                                                <FontAwesomeIcon className="text-2xl sm:text-4xl dark:text-blue text-blue-darkest" icon={["fab", "github"]}/>
                                                <a href="https://github.com/rollingflamingo" className="ml-4 text-obsidian dark:text-white">rollingflamingo</a></li>
                                            <li className="w-full flex-full py-4 sm:px-4 flex flex-row items-center">
                                                <FontAwesomeIcon className="text-2xl sm:text-4xl dark:text-blue text-blue-darkest" icon={["fas", "envelope"]}/>
                                                <a href="mailto:andrea.storace.uni@gmail.com" className="ml-4 text-obsidian dark:text-white line-clamp-1"><span>andrea.storace.uni@gmail.com</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition.Root>;
}