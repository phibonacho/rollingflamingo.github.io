import {Fragment, useEffect, useRef, useState} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";

export interface IContactDialog {
    visible?: boolean;
}

//         <button className='rounded bg-pink px-4 py-2 text-pink-darkest font-bold' onClick={() => setShow(true)}>Contacts</button>

export default function ContactDialog(props: IContactDialog) {
    let [show, setShow] = useState(false);
    const closeButtonRef = useRef(null);
    useEffect(() => { setShow(!!props.visible)}, [props.visible]);

    return <>
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="fixed z-100 inset-0 overflow-y-auto" initialFocus={closeButtonRef} onClose={setShow}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-blue-darkest bg-opacity-75 transition-opacity" />
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
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="sm:flex flex-row sm:flex-row-reverse py-2 px-4">
                                <button ref={closeButtonRef} onClick={() => setShow(false)} title="Close contact modal"><span className="sr-only">Close contact modal</span><FontAwesomeIcon icon={["fas", "times"]} className="text-obsidian"/></button>
                            </div>
                            <div className="bg-white p-4 pt-0">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-obsidian">
                                            Let's get in touch!
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-obsidian">
                                                Reach me on Linkedin, Github or send me an email!
                                            </p>
                                            <ul className="flex flex-column flex-wrap justify-center items-center p-4 px-8 text-xl" aria-label="Contact options">
                                                <li className="flex-full p-4 flex-full p-4 flex flex-row items-center"><FontAwesomeIcon className="text-4xl text-blue-dark" icon={["fab", "linkedin"]}/>
                                                    <a href="#" className="ml-4 text-obsidian">Andrea Storace</a></li>
                                                <li className="flex-full p-4 flex-full p-4 flex flex-row items-center"><FontAwesomeIcon className="text-4xl text-blue-dark" icon={["fab", "github"]}/>
                                                    <a href="#" className="ml-4 text-obsidian">rollingflamingo</a></li>
                                                <li className="flex-full p-4 flex-full p-4 flex flex-row items-center"><FontAwesomeIcon className="text-4xl text-blue-dark" icon={["fas", "envelope"]}/>
                                                    <a href="#" className="ml-4 text-obsidian">andrea.storace.uni@gmail.com</a></li>
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