import { PackageIcon, PersonStandingIcon, ToyBrickIcon } from "lucide-react";

import { AnimatedNumber } from "@/components/custom/animated-text";

const STATS = [
    {
        label: "Sets Indexed",
        value: 52_102,
        icon: <PackageIcon className="size-4" />,
    },
    {
        label: "Parts Indexed",
        value: 1_156_214_673,
        icon: <ToyBrickIcon className="size-4" />,
    },
    {
        label: "Minifigs Indexed",
        value: 230_572,
        icon: <PersonStandingIcon className="size-4" />,
    },
];

export function Stats() {
    return (
        <div className="flex w-full max-w-150 flex-row flex-wrap justify-around gap-4 overflow-hidden md:grid-cols-3">
            {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                    <div className="flex flex-row items-center gap-2">
                        {stat.icon}
                        <h3 className="font-content text-base">{stat.label}</h3>
                    </div>
                    <AnimatedNumber
                        value={stat.value}
                        className="font-title text-center text-5xl"
                    />
                </div>
            ))}
        </div>
    );
}
