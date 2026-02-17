import Image from "next/image";

import talkSearchFeat from "@/assets/ai-talk-search.webp";
import visualSearchFeat from "@/assets/ai-visual-search.webp";

import { Separator } from "@/components/ui/separator";

export function AiFeatures() {
    return (
        <section className="flex w-full justify-center p-10 py-30">
            <div className="border/60 flex w-full max-w-300 flex-col items-center gap-10">
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
                                Natural language search
                            </h3>
                            <p className="font-content">
                                “small gray hinge thing” “red 2x4 brick” “that
                                slanted windshield piece” MissABrick
                                understands.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <Image
                            src={talkSearchFeat}
                            alt="image section"
                            className="size-25 rounded-xl"
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="font-title text-xl font-bold">
                                Smart suggestions
                            </h3>
                            <p className="font-content">
                                Get similar parts. Discover compatible
                                alternatives. Explore beyond exact matches.
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
                                Visual search
                            </h3>
                            <p className="font-content">
                                Upload a photo. Find the part. Experimental.
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
                                Visual search
                            </h3>
                            <p className="font-content">
                                Upload a photo. Find the part. Experimental.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
