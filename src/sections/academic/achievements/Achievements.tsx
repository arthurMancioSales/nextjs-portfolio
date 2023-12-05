import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card/card"
import { Section } from "@/components/ui/section/Section"
import { ScrollText } from "lucide-react"
import Horizon from "./components/Horizon"
import DigitalAge from "./components/DigitalAge"

export default function Achievements() {
    return (
        <div className="flex">
            <Section className="h-full w-full flex flex-col items-center relative ">
                <div className="z-10 flex flex-col gap-12 w-full justify-center">
                    <h2 className="uppercase font-bold text-5xl text-center">
                        Achievements
                    </h2>
                </div>
            </Section>
            <Section className="h-full w-full flex items-center">
                <Horizon />
            </Section>
            <Section className="h-full w-full flex items-center">
                <DigitalAge />
            </Section>
            <Section className="h-full w-full flex items-center">
                <Horizon />
            </Section>
            <Section className="h-full w-full flex items-center">
                <DigitalAge />
            </Section>
            <Section className="h-full w-full flex items-center">
                <Horizon />
            </Section>
        </div>
    )
}
