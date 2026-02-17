"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

const formatter = Intl.NumberFormat("en-US", {
    style: "decimal",
    notation: "compact",
});

export function AnimatedNumber({
    value,
    className,
}: {
    value: number;
    className?: string;
}) {
    const count = useMotionValue(0);
    const formatted = useTransform(() => formatter.format(count.get()));

    useEffect(() => {
        const controls = animate(count, value, { duration: 5 });
        return () => controls.stop();
    }, [value]);

    return <motion.pre className={className}>{formatted}</motion.pre>;
}
