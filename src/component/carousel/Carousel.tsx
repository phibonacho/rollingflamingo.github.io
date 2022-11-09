import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import {FC, Children, useState, ReactChild, ReactFragment, ReactPortal, useRef, useEffect} from "react";
import styles from "./carousel.module.scss";
import {AnimatePresence, motion, Variant} from "framer-motion";
import useCursor from "../hooks/useCursor";

export interface ICarousel {
    tablist?: boolean;
}

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            position: "absolute"
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        position: "static"
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            position: "absolute"
        };
    }
} as Variant;

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const Carousel: FC<ICarousel> = ({tablist, children}) => {
    const {
        container,
        control,
        control__decoration,
        slides__container,
        slide__wrapper,
        tabList,
        tabList__tab
    } = styles;

    const [[activeSlide, direction], setActiveSlide] = useState([0, 0]);
    const activeSlideRef = useRef<HTMLDivElement>(null);
    const slides = Children.toArray(children);
    const slideNumber = slides.length;

    useEffect(() => {
        if (activeSlideRef.current)
            activeSlideRef.current.focus();
    }, [activeSlide])

    const nextSlide = () => {
        const nextIndex = Math.min(slideNumber - 1, activeSlide + 1);
        setActiveSlide([nextIndex, 1]);
    };

    const prevSlide = () => {
        const nextIndex = Math.max(0, activeSlide - 1);
        setActiveSlide([nextIndex, -1]);
    };

    const moveToTab = (newTab: number) => {
        setActiveSlide([newTab, newTab - activeSlide]);
    };

    const tabId = (i: number) => `carousel-tab-${i}`;
    const panelId = (i: number) => `carousel-panel-${i}`;

    const TabList = () => {
        const [listRefs, _, arrowHandler] = useCursor<(ReactChild | ReactFragment | ReactPortal), HTMLButtonElement>(slides);
        const tabVariants = {
            active: {
                scale: 1.5,
            },
            inactive: {
                scale: 1
            }
        };

        return <ul role={'tablist'} aria-label={'Slide controller'} className={tabList}>
            {
                new Array(slideNumber).fill(1)
                    .map((_, i) => <motion.li key={i} variants={tabVariants}
                                              animate={i === activeSlide ? "active" : "inactive"}>
                        <button role={'tab'}
                                ref={listRefs[i]}
                                onKeyUp={arrowHandler}
                                tabIndex={i === 0 ? 0 : -1}
                                aria-selected={i === activeSlide}
                                id={tabId(i)}
                                aria-controls={panelId(i)}
                                className={[tabList__tab].join(' ')}
                                onClick={() => {
                                    moveToTab(i)
                                }}>
                            <span className={'sr-only'}>Slide
                            </span>
                            {i + 1}
                        </button>
                    </motion.li>)
            }
        </ul>
    };

    return <div role='group' aria-roledescription='carousel' className={container}>
        {tablist
            ? <TabList/>
            : <>
                <button className={[control, styles['control--prev']].join(' ')} onClick={() => prevSlide()}
                        disabled={activeSlide === 0}>
                    <ChevronLeftIcon className={control__decoration}/>
                    <span className={'sr-only'}>Previous slide</span>
                </button>
                <button className={[control, styles['control--next']].join(' ')} onClick={() => nextSlide()}
                        disabled={activeSlide === slideNumber - 1}>
                    <ChevronRightIcon className={control__decoration}/>
                    <span className={'sr-only'}>Next slide</span>
                </button>
            </>
        }
        <div aria-atomic={"false"} aria-live={"assertive"} className={slides__container}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    ref={activeSlideRef}
                    tabIndex={-1}
                    id={panelId(activeSlide)}
                    aria-labelledby={tablist ? tabId(activeSlide) : undefined}
                    key={activeSlide}
                    role={tablist ? 'tabpanel' : 'group'}
                    aria-roledescription={tablist ? '' : 'slide'}
                    className={slide__wrapper}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: {type: "spring", stiffness: 300, damping: 30},
                        opacity: {duration: 0.2}
                    }}
                    drag="x"
                    dragConstraints={{left: 0, right: 0}}
                    dragElastic={1}
                    onDragEnd={(e, {offset, velocity}) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            nextSlide();
                        } else if (swipe > swipeConfidenceThreshold) {
                            prevSlide();
                        }
                    }}>
                    {slides[activeSlide]}
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
};

export default Carousel;