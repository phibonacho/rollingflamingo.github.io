import React, {createRef, useCallback, useEffect, useState} from "react";

type orientation = 'horizontal' | 'vertical';

const useCursor = <T, ET extends HTMLElement>(list: Array<T>, orientation: orientation = 'horizontal') => {
    const [listRefs, setListRefs] = useState<Array<React.RefObject<ET>>>([]);
    const [position, setPosition] = useState<null | React.RefObject<ET>>(null);

    useEffect(() => {
        setListRefs((refs) => Array(list.length)
            .fill(null)
            .map((_, i) => refs[i] || createRef<HTMLElement>()));
    }, [list]);

    useEffect(() => {
        if(listRefs.length)
            setPosition(listRefs[0]);
    }, [listRefs])

    const currentListFocus = useCallback((activeElement: Element | ET | null | undefined) => {
        if (activeElement === null)
            return -1;

        return listRefs.findIndex(({current = null}) => current === activeElement);
    }, [listRefs]);

    const moveHandler = (event: React.KeyboardEvent<HTMLElement>, simulate: boolean = false) => {
        event.stopPropagation();

        const focusElement = currentListFocus(simulate ? position?.current : document.activeElement);

        if (focusElement < 0)
            return;

        let target = null;

        const cursorNextIndex = Math.min(listRefs.length, focusElement + 1);
        const cursorPrevIndex = Math.max(0, focusElement - 1);

        if (orientation === 'horizontal')
            switch (event.code) {
                case 'ArrowRight':
                    target = listRefs[cursorNextIndex];
                    break;
                case 'ArrowLeft':
                    target = listRefs[cursorPrevIndex];
                    break;
                default:
                // do nothing
            }
        else
            switch (event.code) {
                case 'ArrowDown':
                    target = listRefs[cursorNextIndex];
                    break;
                case 'ArrowUp':
                    target = listRefs[cursorPrevIndex];
                    break;
                default:
                // do nothing
            }

        if (target && target.current) {
            setPosition(target);
            if(!simulate)
                target.current.focus();
        }
    };

    return [listRefs, position, moveHandler] as const;
};

export default useCursor;