"use client";

import { Section } from "@/components/ui/section/Section";
import Spline from "@splinetool/react-spline";
import { Code2, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <Section id="homeSection">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="flex w-full items-center justify-between">
                    <div className="flex h-full flex-col justify-between">
                        <div className="flex flex-col gap-2 pt-16">
                            <h2 className="text-6xl font-bold">
                                Hey, I&apos;m Arthur!
                            </h2>
                            <p className="font-light">
                                Get to know me a bit more
                            </p>
                        </div>

                        <p className="font-semibold">Application ID: </p>
                    </div>
                    <div className="relative flex flex-col gap-4">
                        <Spline
                            scene="https://draft.spline.design/6bph1mrMZpmIrq-4/scene.splinecode"
                            className="absolute bottom-1/4 right-1/3 scale-[0.3]"
                        />
                        <Spline
                            scene="https://prod.spline.design/dfw8exBixtXB-GMk/scene.splinecode"
                            className="absolute bottom-1/3 left-1/3 scale-[0.3]"
                        />
                        <Spline
                            scene="https://prod.spline.design/TwctAEiMaLnOOhc7/scene.splinecode"
                            className="absolute left-[40%] top-[20%] scale-[0.3]"
                        />
                        <Spline
                            scene="https://prod.spline.design/OCr8oJ0ayRVGrYdw/scene.splinecode"
                            className="absolute right-1/4 top-1/4 scale-[0.3]"
                        />

                        <svg
                            width="457"
                            height="415"
                            viewBox="0 0 557 515"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M455.604 105.049C503.355 159.323 553.296 217.974 556.801 291.507C560.305 365.039 517.373 453.891 445.966 491.97C374.121 530.05 273.362 517.794 180.051 477.964C86.74 437.696 0 370.292 0 302.011C0 234.169 86.3019 165.889 153.328 107.238C219.917 48.5869 267.667 -0.434785 314.542 0.0029085C360.979 0.440602 407.415 50.3376 455.604 105.049Z"
                                fill="#400E71"
                            />
                        </svg>
                        <div className="flex w-full justify-center gap-4">
                            <Link href="https://www.linkedin.com/in/arthur-mancio-sales-5446301b8/">
                                <Linkedin
                                    className="rounded-md bg-foreground p-2 text-background transition-colors duration-300 hover:bg-secondary hover:text-foreground"
                                    size={40}
                                />
                            </Link>
                            <Link href="https://www.instagram.com/mancioarthur/">
                                <Instagram
                                    className="rounded-md bg-foreground p-2 text-background transition-colors duration-300 hover:bg-secondary hover:text-foreground"
                                    size={40}
                                />
                            </Link>
                            <Link href="https://github.com/arthurMancioSales/">
                                <Github
                                    className="rounded-md bg-foreground p-2 text-background transition-colors duration-300 hover:bg-secondary hover:text-foreground"
                                    size={40}
                                />
                            </Link>
                            <Link href="https://github.com/arthurMancioSales/nextjs-portfolio">
                                <Code2
                                    className="rounded-md bg-foreground p-2 text-background transition-colors duration-300 hover:bg-secondary hover:text-foreground"
                                    size={40}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        id="mouseIcon"
                        className="relative h-12 w-8 rounded-[60px] border-[3px] border-solid border-foreground"
                    />
                    <small>scroll down</small>
                </div>
            </div>
        </Section>
    );
}
