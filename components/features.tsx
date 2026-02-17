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
        <section className="flex w-full justify-center p-10">
            <div className="border/60 flex w-full flex-row gap-4 overflow-hidden rounded-xl border">
                <div className="flex flex-1 flex-col justify-between p-4">
                    <h2 className="font-title text-5xl">Built for builders</h2>

                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="search"
                        value={selectedFeature}
                        onValueChange={onFeatureChange}
                    >
                        <AccordionItem value="search">
                            <AccordionTrigger className="font-title text-xl font-bold">
                                Search anything
                            </AccordionTrigger>
                            <AccordionContent className="font-content">
                                Find sets by name or number. Find parts by ID or
                                description. Instant, simple, focused.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="explore">
                            <AccordionTrigger className="font-title text-xl font-bold">
                                Explore every piece
                            </AccordionTrigger>
                            <AccordionContent className="font-content">
                                View complete parts breakdowns. Filter by color,
                                quantity, element ID. Navigate between sets and
                                parts seamlessly.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="export">
                            <AccordionTrigger className="font-title text-xl font-bold">
                                Export clean data
                            </AccordionTrigger>
                            <AccordionContent className="font-content">
                                Download a structured Excel file. Ready for
                                inventory, sorting, or ordering. No cleanup
                                required.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex-2 p-4">
                    <Image
                        src={imageSource}
                        alt="image section"
                        className="rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}
