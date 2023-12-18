import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card/card";
import { Section } from "@/components/ui/section/Section";
import { ScrollText } from "lucide-react";
import Horizon from "./components/Horizon";
import DigitalAge from "./components/DigitalAge";

export default function Achievements() {
    return (
        <div className="flex">
            <Section className="relative flex h-full w-full flex-col items-center ">
                <div className="z-10 flex w-full flex-col justify-center gap-12">
                    <h2 className="text-center text-5xl font-bold uppercase">
                        Achievements
                    </h2>
                </div>
            </Section>
            <Section className="flex h-full w-full items-center">
                <Horizon />
            </Section>
            <Section className="flex h-full w-full items-center">
                <DigitalAge />
            </Section>
            <Section className="flex h-full w-full items-center">
                <Horizon />
            </Section>
            <Section className="flex h-full w-full items-center">
                <DigitalAge />
            </Section>
            <Section className="flex h-full w-full items-center">
                <Horizon />
            </Section>
        </div>
    );
}
