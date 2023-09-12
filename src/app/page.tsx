import { ScrollWrapper } from "@/components/ScrollWrapper/ScrollWrapper"
import { About } from "@/components/sections/about/About"
import { Hero } from "@/components/sections/hero/Hero"

export default function Home() {
    return (
        <ScrollWrapper>
            <Hero></Hero>
            <About></About>
        </ScrollWrapper>
    )
}
