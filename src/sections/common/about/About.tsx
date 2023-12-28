import { Button } from "@/components/ui/button/button";
import { Section } from "@/components/ui/section/Section";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import arthur from "public/images/aboutSection/arthur.png";
import frame from "public/images/aboutSection/aboutMeFrame.png";

export function About() {
    return (
        <div className="bg-[url('/images/aboutSection/aboutMeBackground.png')] bg-cover">
            <Section id="aboutSection" className="w-screen pt-12">
                <div className="grid h-full grid-cols-2 pl-[3.2rem] pr-16">
                    <div className="col-span-1">
                        <div className="relative h-full w-full">
                            <Image
                                src={arthur}
                                fill
                                alt=""
                                className="object-cover object-top"
                            />
                            <Image
                                src={frame}
                                fill
                                alt=""
                                className="absolute"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex h-full flex-col items-end justify-between">
                        <div className="flex h-full flex-col items-center justify-between pl-8 pr-2 pt-6">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <h2 className="font-greatVibes text-5xl capitalize">
                                    about me
                                </h2>
                                <p className="max-w-[650px] text-center font-greatVibes text-2xl font-medium">
                                    Insistent, adventurous, and enthusiastic are
                                    different ways to describe the mess I am.
                                </p>
                            </div>
                            <div className="flex max-w-2xl flex-col items-start justify-center gap-4">
                                <div>
                                    <p className="indent-6 leading-6">
                                        From a young age, I have always believed
                                        that it&apos;s in the moments of
                                        difficulty where we improve the most.
                                        This mantra has made me constantly look
                                        for new challenges. Doing the bare
                                        minimum or the same old thing was not my
                                        type. And even before graduating from
                                        the SESI 182 Educational Center in the
                                        city of São José dos Campos, São Paulo -
                                        Brazil, class of 2021, I found myself
                                        seeking the challenge of international
                                        graduation.
                                    </p>
                                    <p className="indent-6 leading-6">
                                        It was then that I met the Van Veen
                                        Institute, a watershed from the very
                                        first moment. There I found support and
                                        advice. I found myself. I went through
                                        the most challenging moments of my life.
                                        And therefore, through the deepest phase
                                        of improvement.
                                    </p>
                                    <p className="indent-6 leading-6">
                                        Through this portfolio, I would like to
                                        present a little of the path I have
                                        walked so far. Of the defeats and
                                        victories that made me who I am.
                                    </p>
                                </div>
                                <div className="flex gap-6">
                                    <Button variant={"outline"}>
                                        <Link href={"/academic"}>
                                            <GraduationCap className="mr-2 inline" />
                                            Academic
                                        </Link>
                                    </Button>
                                    <Button variant={"default"}>
                                        <Link href={"/no-idea"}>?????</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
