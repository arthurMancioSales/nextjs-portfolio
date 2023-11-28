import { ScrollWrapper } from "@/components/ScrollWrapper/ScrollWrapper";
import { Hero } from "@/app/(sections)/(heroSection)/Hero";
import { About } from "./(sections)/(aboutSection)/About";

export default function Home() {
    return (
    <ScrollWrapper>
            <Hero />
            <About />
        </ScrollWrapper>
    );
}
