"use client"

import { Section } from "@/components/ui/section/Section"
import FutureSeedsGrid from "./photoGrids/FutureSeedsGrid"
import futureSeeds from "public/images/extraActivities/futureSeeds/futureSeedsLogo.png"
import Image from "next/image"

export default function Volunteer() {
    return (
        <Section className="w-screen flex flex-col items-center relative justify-center gap-12">
            <h2 className="uppercase font-bold text-5xl text-center">
                Future Seeds
            </h2>
            <div className="grid grid-cols-5 w-full h-4/5 grid-rows-1 gap-16">
                <div className="col-span-2 h-full">
                    <FutureSeedsGrid />
                </div>
                <div className="col-span-3 relative">
                    <p className="w-3/5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore amet fugiat eos cumque impedit nulla
                        veniam corrupti recusandae necessitatibus cupiditate
                        ipsa rerum est obcaecati mollitia ipsam quas, iusto
                        possimus magnam perferendis eaque facilis vel asperiores
                        alias assumenda! Sint quaerat rem harum qui, vitae
                        assumenda dolor atque impedit ea eos ad ipsam ut
                        aspernatur error corporis quae similique quam repellat.
                        Delectus obcaecati, nam quae ad neque temporibus
                        cupiditate consectetur mollitia esse facere quod hic
                        doloribus numquam libero ipsam fugiat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore amet fugiat eos cumque impedit nulla
                        veniam corrupti recusandae necessitatibus cupiditate
                        ipsa rerum est obcaecati mollitia ipsam quas, iusto
                        possimus magnam perferendis eaque facilis vel asperiores
                        alias assumenda! Sint quaerat rem harum qui, vitae
                        assumenda dolor atque impedit ea eos ad ipsam ut
                        aspernatur error corporis quae similique quam repellat.
                        Delectus obcaecati, nam quae ad neque temporibus
                        cupiditate consectetur mollitia esse facere quod hic
                        doloribus numquam libero ipsam fugiat.
                    </p>
                    <div className="absolute right-0 top-0">
                        <div className="relative w-56 h-56">
                            <Image
                                src={futureSeeds}
                                className="object-cover"
                                fill
                                alt="future Seeds Logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
