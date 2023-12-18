"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface carouselProps extends React.HTMLAttributes<HTMLDivElement> {
    pageCount: number;
}

export default function Carousel({
    children,
    pageCount,
    className,
    ...props
}: carouselProps) {
    const [carouselIndex, setCarouselIndex] = useState(0);

    function renderPagination() {
        const pages = [];
        for (let i = 0; i < pageCount; i++) {
            pages.push(
                <div
                    className={cn(
                        "rounded-full w-3 h-3 transition-colors duration-150",
                        carouselIndex === i
                            ? "bg-primary"
                            : "bg-secondary border-muted border hover:bg-accent cursor-pointer",
                    )}
                    key={i}
                    id={`page${i}`}
                    onClick={() => scrollToPage(i)}
                />,
            );
        }

        return pages;
    }

    function previousSlide() {
        setCarouselIndex((carouselIndex) =>
            carouselIndex === 0 ? pageCount - 1 : carouselIndex - 1,
        );
    }

    function nextSlide() {
        setCarouselIndex((carouselIndex) =>
            carouselIndex === pageCount - 1 ? 0 : carouselIndex + 1,
        );
    }

    function scrollToPage(pageNumber: number) {
        setCarouselIndex(pageNumber);
    }

    return (
        <div
            id="carouselRoot"
            className="relative flex h-full w-full flex-col items-center justify-center gap-4"
            data-carousel
            {...props}
        >
            <div
                className={cn("w-80 overflow-hidden", className)}
                id="carouselDisplay"
            >
                <div
                    className="flex h-full w-full transition-transform duration-500 ease-out"
                    id="carouselSlider"
                    style={{
                        transform: `translateX(${carouselIndex * -100}%)`,
                    }}
                    data-carousel-slide
                >
                    {children}
                </div>
            </div>

            <div
                className="flex items-center gap-2 py-2"
                id="carouselPagination"
            >
                <ChevronLeft
                    id="carouselPreviousButton"
                    onClick={previousSlide}
                    className="pointer-events-auto h-8 w-8 cursor-pointer rounded-full transition-colors duration-150 hover:text-accent"
                    data-previous-button
                >
                    previous
                </ChevronLeft>
                <div
                    className="flex items-center gap-2 py-2"
                    data-carousel-pagination
                >
                    {renderPagination()}
                </div>
                <ChevronRight
                    id="carouselNextButton"
                    onClick={nextSlide}
                    className="pointer-events-auto h-8 w-8 cursor-pointer transition-colors duration-150 hover:text-accent"
                    data-next-button
                >
                    next
                </ChevronRight>
            </div>
        </div>
    );
}
