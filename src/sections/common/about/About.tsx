import { Button } from "@/components/ui/button/button"
import { Section } from "@/components/ui/section/Section"
import { GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import manOnComputer from "public/images/aboutSection/man-on-computer.png"

export function About() {
    return (
        <Section id="aboutSection">
            <div className="flex flex-col justify-between items-center h-full w-full">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className="font-semibold text-7xl capitalize">
                        about me
                    </h2>
                    <p className="font-medium text-2xl max-w-[650px] text-center">
                        Insistent, adventurous, and enthusiastic are different
                        ways to describe the mess I am.
                    </p>
                </div>
                <div className="flex w-full justify-between h-full items-center">
                    <div className="max-w-2xl flex justify-center flex-col items-start gap-4">
                        <div>
                            <p className="indent-6">
                                From a young age, I have always believed that
                                it&apos;s in the moments of difficulty where we
                                improve the most. This mantra has made me
                                constantly look for new challenges. Doing the
                                bare minimum or the same old thing was not my
                                type. And even before graduating from the SESI
                                182 Educational Center in the city of São José
                                dos Campos, São Paulo - Brazil, class of 2021, I
                                found myself seeking the challenge of
                                international graduation.
                            </p>
                            <p className="indent-6">
                                It was then that I met the Van Veen Institute, a
                                watershed from the very first moment. There I
                                found support and advice. I found myself. I went
                                through the most challenging moments of my life.
                                And therefore, through the deepest phase of
                                improvement.
                            </p>
                            <p className="indent-6">
                                Through this portfolio, I would like to present
                                a little of the path I have walked so far. Of
                                the defeats and victories that made me who I am.
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
                    <div className="">
                        <div className="relative w-72 h-80">
                            {/* <Image alt="" fill src={manOnComputer}></Image> */}
                            <small className="absolute -bottom-2 text-xs">
                                Illustration by{" "}
                                <a href="https://icons8.com/illustrations/author/XTPoH093lluQ">
                                    Viktoriya Belinio
                                </a>{" "}
                                from{" "}
                                <a href="https://icons8.com/illustrations">
                                    Ouch!
                                </a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
