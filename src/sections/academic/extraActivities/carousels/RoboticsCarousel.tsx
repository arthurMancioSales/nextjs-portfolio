"use client"

import Carousel from "@/components/ui/carousel/Carouse"

const carouselPages = [
    {
        description: "Robotics",
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus at. Id aliquet risus feugiat in ante metus. Felis imperdiet proin fermentum leo vel orci porta non. Amet justo donec enim diam vulputate. Massa tincidunt dui ut ornare lectus sit amet. Auctor neque vitae tempus quam pellentesque nec. Viverra mauris in aliquam sem. Varius morbi enim nunc faucibus a. Amet luctus venenatis lectus magna fringilla urna porttitor.",
    },
    {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus at. Id aliquet risus feugiat in ante metus. Felis imperdiet proin fermentum leo vel orci porta non. Amet justo donec enim diam vulputate. Massa tincidunt dui ut ornare lectus sit amet. Auctor neque vitae tempus quam pellentesque nec. Viverra mauris in aliquam sem. Varius morbi enim nunc faucibus a. Amet luctus venenatis lectus magna fringilla urna porttitor.",
    },
]

export function RoboticsCarousel() {
    return (
        <Carousel className="h-full w-full" pageCount={carouselPages.length}>
            {carouselPages.map((page, i) => {
                return (
                    <div
                        key={i}
                        className="min-w-full max-w-full flex md:flex-row lg:flex-row flex-col"
                    >
                        <div className="relative w-full h-full bg-primary/20 rounded-tr-2xl rounded-bl-2xl p-4">
                            <p className="indent-6 h-full">
                                {page.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </Carousel>
    )
}
