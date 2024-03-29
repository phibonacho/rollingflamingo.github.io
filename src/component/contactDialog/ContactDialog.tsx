import React, {Fragment, useEffect, useRef} from 'react';
import {Dialog, Transition} from '@headlessui/react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {init, toggle} from '../../features/dialog/dialogSlice';

const ref = 'contact-dialog';

export interface IContactDialog {
    visible?: boolean;
}

export interface IContactButton {
    cta: string;
    attrs?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const ContactButton = (props: IContactButton) => {
    const defaultStyle = ' rounded bg-blue-darkest dark:bg-obsidian mx-auto px-4 py-2 text-white font-bold';
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

    if(props.attrs?.className)
        attrs.className += defaultStyle
    else
        attrs.className = defaultStyle

    return <button {...attrs} onClick={view}>
        {
            props.cta
        }
    </button>
}

export default function ContactDialog(props: IContactDialog) {
    const show = useSelector((state: RootState) => state.dialog.dialogs)
        .find(d => d.ref === ref)?.show;
    const dispatch = useDispatch();
    const hide = () => dispatch(toggle({ ref: ref, show: false}));
    const closeButtonRef = useRef(null);

    return <>
        <Transition.Root show={!!show} as={Fragment}>
            <Dialog as="div" className="fixed z-100 inset-0 overflow-y-auto" initialFocus={closeButtonRef} onClose={hide}>
                <div className="flex items-center sm:items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-blue-dark bg-opacity-75 dark:bg-zinc-800 dark:bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white dark:bg-zinc-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
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
        </Transition.Root>
    </>;
}