import { AiFeatures } from "@/components/ai";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <AiFeatures />
            <Footer />
        </>
    );
}
