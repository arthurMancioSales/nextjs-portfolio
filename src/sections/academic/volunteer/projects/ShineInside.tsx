import { Section } from "@/components/ui/section/Section";
import futureSeeds from "public/images/extraActivities/futureSeeds/futureSeedsLogo.png";
import Image from "next/image";

export default function ShineInside() {
    return (
        <div className="flex">
            <Section className="relative flex w-screen flex-col items-center justify-center gap-12">
                <h2 className="text-center text-5xl font-bold uppercase">
                    Shine Inside
                </h2>
                <div className="grid h-4/5 w-full grid-cols-5 grid-rows-1 gap-16">
                    <div className="col-span-2 grid aspect-square h-full grid-cols-2 gap-3">
                        <div className="col-span-2 bg-accent" />
                        <div className="col-span-2 flex gap-3">
                            <div className="aspect-square bg-accent" />
                            <div className="aspect-square bg-accent" />
                        </div>
                    </div>
                    <div className="relative col-span-3">
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
                            <div className="relative h-56 w-56">
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

            <Section className="flex w-fit gap-16">
                <div className="flex h-full flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold text-foreground">
                            Social media
                        </h2>
                        <p className="indent-6 text-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis id odio reiciendis temporibus sint
                            deleniti molestias quisquam pariatur non error
                            consequuntur unde quod placeat porro maxime aperiam
                            fugiat repudiandae quasi, cumque optio obcaecati
                            eius sunt eaque?
                        </p>
                        <p className="indent-6 text-foreground">
                            Nobis id odio reiciendis temporibus sint deleniti
                            molestias quisquam pariatur non error consequuntur
                            unde quod placeat porro maxime aperiam fugiat
                            repudiandae quasi, cumque optio obcaecati eius sunt
                            eaque?
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="relative col-span-1 aspect-square bg-accent">
                            {/* <Image></Image> */}
                        </div>
                        <div className="relative col-span-1 aspect-square bg-accent">
                            {/* <Image></Image> */}
                        </div>
                        <div className="relative col-span-1 aspect-square bg-accent">
                            {/* <Image></Image> */}
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="grid aspect-square h-full grid-cols-6 grid-rows-6 gap-3">
                        <div className="relative col-span-2 row-span-4 bg-accent">
                            {/* <Image></Image> */}
                        </div>
                        <div className="col-span-4 row-span-2 flex gap-3">
                            <div className="aspect-square w-full bg-accent" />
                        </div>
                        <div className="col-span-4 col-start-3 row-start-3 aspect-square bg-accent">
                            {/* <Image></Image> */}
                        </div>
                        <div className="col-span-2 row-start-5 aspect-square bg-accent">
                            {/* <Image></Image> */}
                        </div>
                    </div>
                    <div className="aspect-[9/16] h-full bg-accent" />
                </div>
            </Section>
        </div>
    );
}
