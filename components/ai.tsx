import Image from "next/image";

import inteligentMatchingFeat from "@/assets/ai-intelligent-matching.webp";
import smartSuggestionsFeat from "@/assets/ai-smart-suggestions.webp";
import talkSearchFeat from "@/assets/ai-talk-search.webp";
import visualSearchFeat from "@/assets/ai-visual-search.webp";

import { Separator } from "@/components/ui/separator";

export function AiFeatures() {
    return (
        <section className="flex w-full justify-center p-10 py-30">
            <div className="border/60 flex w-full max-w-7xl flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-5">
                    <h2 className="font-title text-5xl">
                        AI Assisted search and suggestions
                    </h2>
                    <Separator className="max-w-100" />
                </div>

                <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
                    <div className="flex flex-row items-center gap-5">
                        <Image
                            src={talkSearchFeat}
                            alt="image section"
                            className="size-25 rounded-xl"
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-title text-xl font-bold">
                                Natural Language Search
                            </h3>
                            <p className="font-content">
                                Search the way you think. Describe a piece in
                                plain language, MissABrick understands the
                                intent and finds the right part.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <Image
                            src={smartSuggestionsFeat}
                            alt="image section"
                            className="size-25 rounded-xl"
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-title text-xl font-bold">
                                Smart suggestions
                            </h3>
                            <p className="font-content">
                                Get relevant alternatives instantly. Discover
                                compatible parts, similar elements, and common
                                substitutions beyond exact matches.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <Image
                            src={visualSearchFeat}
                            alt="image section"
                            className="size-25 rounded-xl"
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-title text-xl font-bold">
                                Visual Search
                            </h3>
                            <p className="font-content">
                                Upload a photo of a piece and let AI identify
                                it. Experimental, but improving with every
                                search.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <Image
                            src={inteligentMatchingFeat}
                            alt="image section"
                            className="size-25 rounded-xl"
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-title text-xl font-bold">
                                Intelligent Matching
                            </h3>
                            <p className="font-content">
                                Find parts that fit the same role. See
                                compatible variants, updated molds, and
                                interchangeable elements at a glance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
