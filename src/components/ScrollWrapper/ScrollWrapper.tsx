"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { ThemeProvider } from "next-themes"
import { useLayoutEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

export function ScrollWrapper({ children }: { children: React.ReactNode }) {
    const carouselRef = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        if (carouselRef) {
            const carousel = document.querySelector("#carousel")
            function getLeftScrollAmount() {
                const carouselWidth = (carousel && carousel.scrollWidth) || 0
                return -(carouselWidth - window.innerWidth)
            }

            const tween = gsap.to(carousel, {
                x: getLeftScrollAmount,
                duration: 3,
                ease: "none",
            })

            const scroll = ScrollTrigger.create({
                trigger: "#carouselWrapper",
                end: () => `+=${getLeftScrollAmount() * -1}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
            })

            return () => {
                tween.kill()
                scroll.kill(false)
            }
        }
    }, [])

    return (
        <div className="">
            <div className="h-full overflow-hidden" id="carouselWrapper">
                <div
                    id="carousel"
                    className="flex w-fit flex-nowrap items-center"
                    ref={carouselRef}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
