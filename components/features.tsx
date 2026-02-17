"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";

import exploreFeat from "@/assets/lego-explore-feature.webp";
import exportFeat from "@/assets/lego-export-feature.webp";
import searchFeat from "@/assets/lego-search-feature.webp";
import toolboxImg from "@/assets/toolbox.webp";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Features() {
    const [selectedFeature, setSelectedFeature] = useState("search");

    const onFeatureChange = useCallback(
        (feature: string) => {
            if (feature.length > 0) {
                setSelectedFeature(feature);
            } else {
                setSelectedFeature("search");
            }
        },
        [setSelectedFeature],
    );

    const imageSource = useMemo(() => {
        if (selectedFeature === "search") return searchFeat;
        if (selectedFeature === "explore") return exploreFeat;
        return exportFeat;
    }, [selectedFeature]);

    return (
        <section className="flex w-full justify-center p-5 md:p-10">
            <div className="border/60 flex w-full max-w-7xl flex-col gap-4 overflow-hidden rounded-sm border md:flex-row">
                <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                        <h2 className="font-title text-3xl md:text-5xl">
                            Built for builders
                        </h2>
                        <span className="font-content text-muted-foreground text-xs md:text-sm">
                            Search. Explore. Export.
                        </span>
                    </div>

                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="search"
                        value={selectedFeature}
                        onValueChange={onFeatureChange}
                    >
                        <AccordionItem value="search">
                            <AccordionTrigger className="font-title py-4 text-base font-semibold md:text-lg">
                                Search anything
                            </AccordionTrigger>
                            <AccordionContent className="font-content text-xs md:text-base">
                                Find sets by name or number. Find parts by ID or
                                description. Instant, simple, focused.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="explore">
                            <AccordionTrigger className="font-title py-4 text-base font-semibold md:text-lg">
                                Explore every piece
                            </AccordionTrigger>
                            <AccordionContent className="font-content text-xs md:text-base">
                                View complete parts breakdowns. Filter by color,
                                quantity, element ID. Navigate between sets and
                                parts seamlessly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="export">
                            <AccordionTrigger className="font-title py-4 text-base font-semibold md:text-lg">
                                Export clean data
                            </AccordionTrigger>
                            <AccordionContent className="font-content text-xs md:text-base">
                                Download a structured Excel file. Ready for
                                inventory, sorting, or ordering. No cleanup
                                required.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="h-full flex-1 p-4 lg:flex-2">
                    <Image
                        src={imageSource}
                        alt="image section"
                        className="h-full w-full rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
