import {MotionValue, useTransform} from "framer-motion";

const useTransforms = (value: MotionValue<number>, ...intervals: number[][]): MotionValue<string>[] => {
    let res: MotionValue[] = [];
    for (const i of intervals) {
        const [from, to] = i;
        const mv = useTransform(value, [0, 1], [from, to])
        res.push(mv);
    }

    return res;
}

export default useTransforms;