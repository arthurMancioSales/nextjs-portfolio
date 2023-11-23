"use client"

import topWave from "public/images/extraActivities/topWave.svg"
import bottomWave from "public/images/extraActivities/bottomWave.svg"
import Image from "next/image"
import { Section } from "@/components/ui/section/Section"
import { Code2, Monitor, Scale3d } from "lucide-react"
import { useState } from "react"
import { TbBrandPython } from "react-icons/tb"
import { GiRobotGrab } from "react-icons/gi"
import { CyberLeaderCarousel } from "./carousels/CyberLeaderCarousel"
import { MakerLeaderCarousel } from "./carousels/MakerLeaderCarousel"
import { MITxCarousel } from "./carousels/MITxCarousel"
import { RoboticsCarousel } from "./carousels/RoboticsCarousel"
import { AluraCarousel } from "./carousels/AluraCarousel"
import MITxGrid from "./photoGrids/MITxGrid"
import MakerLeaderGrid from "./photoGrids/MakerLeaderGrid"
import AluraGrid from "./photoGrids/AluraGrid"
import CyberLeaderGrid from "./photoGrids/CyberLeaderGrid"
import RoboticsGrid from "./photoGrids/RoboticsGrid"
import { cn } from "@/lib/utils"

export default function ExtraActivities() {
    const [activeActivity, setActiveActivity] = useState("cyber")

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col">
            <Section className="h-full w-full flex flex-col items-center relative bg-secondary">
                <Image
                    src={topWave}
                    alt="top wave figure"
                    className="absolute top-0 bg-background"
                ></Image>
                <div className="z-10 flex flex-col gap-12 w-full justify-center">
                    <h2 className="uppercase font-bold text-5xl text-center">
                        extra activities
                    </h2>

                    <div className="flex w-full justify-between">
                        <div
                            className={cn(
                                "text-foreground flex flex-col items-center justify-center hover:text-accent active:text-primary transition-colors duration-150",
                                activeActivity === "cyber" && "text-accent",
                            )}
                            onClick={() => setActiveActivity("cyber")}
                        >
                            <Monitor className="w-16 h-16"></Monitor>
                            <p className="capitalize font-semibold text-xl">
                                cyber leader
                            </p>
                        </div>
                        <div
                            className={cn(
                                "text-foreground flex flex-col items-center justify-center hover:text-accent active:text-primary transition-colors",
                                activeActivity === "maker" && "text-accent",
                            )}
                            onClick={() => setActiveActivity("maker")}
                        >
                            <Scale3d className="w-16 h-16"></Scale3d>
                            <p className="capitalize font-semibold text-xl">
                                maker leader
                            </p>
                        </div>
                        <div
                            className={cn(
                                "text-foreground flex flex-col items-center justify-center hover:text-accent active:text-primary transition-colors duration-150",
                                activeActivity === "mit" && "text-accent",
                            )}
                            onClick={() => setActiveActivity("mit")}
                        >
                            <TbBrandPython className="w-16 h-16" />
                            <p className="capitalize font-semibold text-xl">
                                MITx
                            </p>
                        </div>
                        <div
                            className={cn(
                                "text-foreground flex flex-col items-center justify-center hover:text-accent active:text-primary transition-colors duration-150",
                                activeActivity === "robotics" && "text-accent",
                            )}
                            onClick={() => setActiveActivity("robotics")}
                        >
                            <GiRobotGrab className="w-16 h-16"></GiRobotGrab>
                            <p className="capitalize font-semibold text-xl">
                                Robotics
                            </p>
                        </div>
                        <div
                            className={cn(
                                "text-foreground flex flex-col items-center justify-center hover:text-accent active:text-primary transition-colors duration-150",
                                activeActivity === "alura" && "text-accent",
                            )}
                            onClick={() => setActiveActivity("alura")}
                        >
                            <Code2 className="w-16 h-16"></Code2>
                            <p className="capitalize font-semibold text-xl">
                                Alura
                            </p>
                        </div>
                    </div>
                    <div className="grid h-full w-full grid-cols-5 gap-16">
                        <div className="col-span-3">
                            {activeActivity === "cyber" && (
                                <div className="animate-in fade-in duration-500">
                                    <CyberLeaderCarousel></CyberLeaderCarousel>
                                </div>
                            )}
                            {activeActivity === "maker" && (
                                <div className="animate-in fade-in duration-500">
                                    <MakerLeaderCarousel></MakerLeaderCarousel>
                                </div>
                            )}
                            {activeActivity === "mit" && (
                                <div className="animate-in fade-in duration-500">
                                    <MITxCarousel></MITxCarousel>
                                </div>
                            )}
                            {activeActivity === "robotics" && (
                                <div className="animate-in fade-in duration-500">
                                    <RoboticsCarousel></RoboticsCarousel>
                                </div>
                            )}
                            {activeActivity === "alura" && (
                                <div className="animate-in fade-in duration-500">
                                    <AluraCarousel></AluraCarousel>
                                </div>
                            )}
                        </div>
                        <div className="col-span-2">
                            {activeActivity === "cyber" && (
                                <div className="animate-in fade-in duration-500">
                                    <CyberLeaderGrid></CyberLeaderGrid>
                                </div>
                            )}
                            {activeActivity === "maker" && (
                                <div className="animate-in fade-in duration-500">
                                    <MakerLeaderGrid></MakerLeaderGrid>
                                </div>
                            )}
                            {activeActivity === "mit" && (
                                <div className="animate-in fade-in duration-500">
                                    <MITxGrid></MITxGrid>
                                </div>
                            )}
                            {activeActivity === "robotics" && (
                                <div className="animate-in fade-in duration-500">
                                    <RoboticsGrid></RoboticsGrid>
                                </div>
                            )}
                            {activeActivity === "alura" && (
                                <div className="animate-in fade-in duration-500">
                                    <AluraGrid></AluraGrid>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Image
                    src={bottomWave}
                    alt="bottom wave figure"
                    className="absolute bottom-0 fill-primary"
                ></Image>
            </Section>
        </div>
    )
}
