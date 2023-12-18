import { ScrollWrapper } from "@/components/ScrollWrapper/ScrollWrapper"
import { About } from "../sections/common/about/About"
import { Hero } from "../sections/common/hero/Hero"

export default function Home() {
    return (
        <ScrollWrapper>
            <Hero />
            <About />
        </ScrollWrapper>
    )
}
