import { PaperclipIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

import heroImage from "@/assets/lego-sets-hero-section.png";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { AiFeatures } from "@/components/ai";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";

export default function Home() {
    return (
        <>
            <div className="flex h-full w-full flex-col">
                <div className="animate-hero-zoom-in relative h-screen w-full flex-1 overflow-hidden opacity-0">
                    <Image
                        src={heroImage}
                        alt="lego-sets-hero-section"
                        className="animate-hero-image-border h-full w-full object-cover"
                    />
                    <div className="absolute inset-10 flex animate-[800ms_ease-in-out_1s_forwards_fade-in] flex-col items-center justify-center gap-10 rounded-xl bg-black/5 opacity-0">
                        <h1 className="font-title max-w-200 text-center text-7xl text-black">
                            Never miss a brick. Every piece accounted for.
                        </h1>
                        <div className="border/60 flex w-full max-w-125 flex-row items-center gap-3 rounded-md border bg-white px-2.5 pt-2 pb-1 text-black shadow">
                            <SearchIcon className="mb-px size-5" />
                            <input
                                className="font-content focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive placeholder:text-muted-foreground w-full min-w-0 flex-1 rounded-none border-0 bg-transparent py-1.5 text-base shadow-none ring-0 transition-colors outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50 aria-invalid:ring-0 md:text-lg"
                                placeholder="Search sets, parts, or describe a piece…"
                            />
                            <Tooltip>
                                <TooltipTrigger>
                                    <PaperclipIcon className="mb-px size-5 cursor-pointer opacity-50 transition-opacity hover:opacity-100" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Upload images of sets, parts or minifigs
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <Stats />
                    </div>
                </div>
            </div>

            <Features />
            <AiFeatures />
        </>
    );
}
