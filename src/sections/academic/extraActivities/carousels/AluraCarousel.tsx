"use client";

import Carousel from "@/components/ui/carousel/Carouse";

const carouselPages = [
    {
        description: "Alura",
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus at. Id aliquet risus feugiat in ante metus. Felis imperdiet proin fermentum leo vel orci porta non. Amet justo donec enim diam vulputate. Massa tincidunt dui ut ornare lectus sit amet. Auctor neque vitae tempus quam pellentesque nec. Viverra mauris in aliquam sem. Varius morbi enim nunc faucibus a. Amet luctus venenatis lectus magna fringilla urna porttitor.",
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus at. Id aliquet risus feugiat in ante metus. Felis imperdiet proin fermentum leo vel orci porta non. Amet justo donec enim diam vulputate. Massa tincidunt dui ut ornare lectus sit amet. Auctor neque vitae tempus quam pellentesque nec. Viverra mauris in aliquam sem. Varius morbi enim nunc faucibus a. Amet luctus venenatis lectus magna fringilla urna porttitor.",
    },
];

export function AluraCarousel() {
    return (
        <Carousel className="h-full w-full" pageCount={carouselPages.length}>
            {carouselPages.map((page, i) => {
                return (
                    <div
                        key={i}
                        className="flex min-w-full max-w-full flex-col md:flex-row lg:flex-row"
                    >
                        <div className="relative h-full w-full rounded-bl-2xl rounded-tr-2xl bg-primary/20 p-4">
                            <p className="h-full indent-6">
                                {page.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );
}
