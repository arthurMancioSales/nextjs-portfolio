"use client"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

interface IScrollAnchor {
    children: React.ReactNode
    target: string
}

export function ScrollAnchor({ children, target }: IScrollAnchor) {
    gsap.registerPlugin(ScrollToPlugin)

    function scrollToElement() {
        const targetElement = document.querySelector(target)
        const elementPosition = targetElement?.getBoundingClientRect()

        if (elementPosition) {
            gsap.to(window, { duration: 0.2, scrollTo: elementPosition.x })
        }
    }

    return (
        <a
            onClick={scrollToElement}
            className="cursor-pointer hover:underline decoration-transparent transition-colors duration-200 hover:decoration-foreground"
        >
            {children}
        </a>
    )
}
