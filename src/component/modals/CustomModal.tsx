import React, {ForwardRefExoticComponent, Fragment, RefAttributes, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";

export interface ClosableContent {
    closeFunction: () => void;
}

export interface ICustomModal {
    buttonClassName?: string;
    buttonCaption: JSX.Element;
    additionalAction?: () => void;
    BodyContent: ForwardRefExoticComponent<ClosableContent & RefAttributes<HTMLDivElement>>;
}

const CustomModal = (props: ICustomModal) => {
    const [show, setShow] = useState(false);
    const divRef = useRef(null);
    const {BodyContent, buttonClassName, buttonCaption} = props;

    return <>
        <button className={buttonClassName} onClick={() => {
            if(props.additionalAction)
                props.additionalAction();

            setShow(true);
        }}>{buttonCaption}</button>
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" initialFocus={divRef}
                    onClose={() => setShow(false)}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 bg-ayd-dark bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-x-4 sm:translate-x-0 sm:scale-95"
                        enterTo="opacity-100 translate-x-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-x-0 sm:scale-100"
                        leaveTo="opacity-0 translate-x-4 sm:translate-x-0 sm:scale-95"
                    >
                        { <BodyContent ref={divRef} closeFunction={() => setShow(false)} /> }
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    </>;
};

export default React.memo(CustomModal);