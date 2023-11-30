import Image from "next/image"
import FutureSeedsGrid from "../photoGrids/FutureSeedsGrid"
import { Section } from "@/components/ui/section/Section"
import futureSeeds from "public/images/extraActivities/futureSeeds/futureSeedsLogo.png"

export default function FutureSeeds() {
    return (
        <div className="flex">
            <Section className="w-screen flex flex-col items-center relative justify-center gap-12">
                <h2 className="uppercase font-bold text-5xl text-center">
                    Future Seeds
                </h2>
                <div className="grid grid-cols-5 w-full h-4/5 grid-rows-1 gap-16">
                    <div className="col-span-2 h-full">
                        <FutureSeedsGrid />
                    </div>
                    <div className="col-span-3 relative">
                        <p className="w-3/5 indent-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Inventore amet fugiat eos cumque impedit nulla
                            veniam corrupti recusandae necessitatibus cupiditate
                            ipsa rerum est obcaecati mollitia ipsam quas, iusto
                            possimus magnam perferendis eaque facilis vel
                            asperiores alias assumenda! Sint quaerat rem harum
                            qui, vitae assumenda dolor atque impedit ea eos ad
                            ipsam ut aspernatur error corporis quae similique
                            quam repellat. Delectus obcaecati, nam quae ad neque
                            temporibus cupiditate consectetur mollitia esse
                            facere quod hic doloribus numquam libero ipsam
                            fugiat.
                        </p>
                        <p className="indent-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Inventore amet fugiat eos cumque impedit nulla
                            veniam corrupti recusandae necessitatibus cupiditate
                            ipsa rerum est obcaecati mollitia ipsam quas, iusto
                            possimus magnam perferendis eaque facilis vel
                            asperiores alias assumenda! Sint quaerat rem harum
                            qui, vitae assumenda dolor atque impedit ea eos ad
                            ipsam ut aspernatur error corporis quae similique
                            quam repellat. Delectus obcaecati, nam quae ad neque
                            temporibus cupiditate consectetur mollitia esse
                            facere quod hic doloribus numquam libero ipsam
                            fugiat.
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

            <Section className="w-fit flex gap-16">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-3xl text-foreground">
                            Social media
                        </h2>
                        <p className="text-foreground indent-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis id odio reiciendis temporibus sint
                            deleniti molestias quisquam pariatur non error
                            consequuntur unde quod placeat porro maxime aperiam
                            fugiat repudiandae quasi, cumque optio obcaecati
                            eius sunt eaque?
                        </p>
                        <p className="text-foreground indent-6">
                            Nobis id odio reiciendis temporibus sint deleniti
                            molestias quisquam pariatur non error consequuntur
                            unde quod placeat porro maxime aperiam fugiat
                            repudiandae quasi, cumque optio obcaecati eius sunt
                            eaque?
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-accent col-span-1 aspect-square relative">
                            {/* <Image></Image> */}
                        </div>
                        <div className="bg-accent col-span-1 aspect-square relative">
                            {/* <Image></Image> */}
                        </div>
                        <div className="bg-accent col-span-1 aspect-square relative">
                            {/* <Image></Image> */}
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="h-full gap-3 bg-blue-400/20 grid grid-rows-6 grid-cols-6 aspect-square">
                        <div className="bg-accent relative row-span-4 col-span-2">
                            {/* <Image></Image> */}
                        </div>
                        <div className="col-span-4 row-span-2 flex gap-3">
                            <div className="bg-accent aspect-square w-full" />
                        </div>
                        <div className="bg-accent aspect-square row-start-3 col-start-3 col-span-4">
                            {/* <Image></Image> */}
                        </div>
                        <div className="aspect-square row-start-5 bg-accent col-span-2">
                            {/* <Image></Image> */}
                        </div>
                    </div>
                    <div className="bg-accent aspect-[9/16] h-full" />
                </div>
            </Section>
        </div>
    )
}
