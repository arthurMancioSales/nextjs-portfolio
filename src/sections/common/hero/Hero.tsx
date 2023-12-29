"use client";

import { Section } from "@/components/ui/section/Section";
import VaraText from "@/components/varaText/varaText";

export function Hero() {
    return (
        <div className="w-screen bg-[url('/images/common/heroSection/heroBackground.png')] bg-cover">
            <Section id="homeSection">
                <div className="flex h-full w-full flex-col items-center justify-between">
                    <div className="flex h-1/2 flex-col items-center justify-center">
                        {/* <VaraText text="Arthur Mancio's" /> */}
                        <h1 className={"font-greatVibes text-8xl"}>
                            Arthur Mancio&apos;s
                        </h1>
                        <h2 className="font-greatVibes text-6xl">Portfolio</h2>
                    </div>
                    <div className="text-foreground-contrast flex flex-col items-center">
                        <div
                            id="mouseIcon"
                            className="relative h-12 w-8 rounded-[60px] border-[3px] border-solid border-white before:bg-white"
                        />
                        <small className="text-white">scroll down</small>
                    </div>
                </div>
            </Section>
        </div>
    );
}
