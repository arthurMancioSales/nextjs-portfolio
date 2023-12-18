"use client";

import topWave from "public/images/extraActivities/topWave.svg";
import bottomWave from "public/images/extraActivities/bottomWave.svg";
import Image from "next/image";
import { Section } from "@/components/ui/section/Section";
import { Code2, Monitor, Scale3d } from "lucide-react";
import { useState } from "react";
import { TbBrandPython } from "react-icons/tb";
import { GiRobotGrab } from "react-icons/gi";
import { CyberLeaderCarousel } from "./carousels/CyberLeaderCarousel";
import { MakerLeaderCarousel } from "./carousels/MakerLeaderCarousel";
import { MITxCarousel } from "./carousels/MITxCarousel";
import { RoboticsCarousel } from "./carousels/RoboticsCarousel";
import { AluraCarousel } from "./carousels/AluraCarousel";
import MITxGrid from "./photoGrids/MITxGrid";
import MakerLeaderGrid from "./photoGrids/MakerLeaderGrid";
import AluraGrid from "./photoGrids/AluraGrid";
import CyberLeaderGrid from "./photoGrids/CyberLeaderGrid";
import RoboticsGrid from "./photoGrids/RoboticsGrid";
import { cn } from "@/lib/utils";

export default function ExtraActivities() {
    const [activeActivity, setActiveActivity] = useState("cyber");

    return (
        <div className="relative flex h-screen w-screen flex-col items-center justify-center text-clip bg-secondary">
            <Image
                src={topWave}
                alt="top wave figure"
                className="absolute top-0 bg-background"
            />
            <Section className="relative flex h-full w-full flex-col items-center ">
                <div className="z-10 flex w-full flex-col justify-center gap-12">
                    <h2 className="text-center text-5xl font-bold uppercase">
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
                            <Monitor className="h-16 w-16" />
                            <p className="text-xl font-semibold capitalize">
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
                            <Scale3d className="h-16 w-16" />
                            <p className="text-xl font-semibold capitalize">
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
                            <TbBrandPython className="h-16 w-16" />
                            <p className="text-xl font-semibold capitalize">
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
                            <GiRobotGrab className="h-16 w-16" />
                            <p className="text-xl font-semibold capitalize">
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
                            <Code2 className="h-16 w-16" />
                            <p className="text-xl font-semibold capitalize">
                                Alura
                            </p>
                        </div>
                    </div>
                    <div className="grid h-full w-full grid-cols-5 gap-16">
                        <div className="col-span-3">
                            {activeActivity === "cyber" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <CyberLeaderCarousel />
                                </div>
                            )}
                            {activeActivity === "maker" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <MakerLeaderCarousel />
                                </div>
                            )}
                            {activeActivity === "mit" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <MITxCarousel />
                                </div>
                            )}
                            {activeActivity === "robotics" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <RoboticsCarousel />
                                </div>
                            )}
                            {activeActivity === "alura" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <AluraCarousel />
                                </div>
                            )}
                        </div>
                        <div className="col-span-2">
                            {activeActivity === "cyber" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <CyberLeaderGrid />
                                </div>
                            )}
                            {activeActivity === "maker" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <MakerLeaderGrid />
                                </div>
                            )}
                            {activeActivity === "mit" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <MITxGrid />
                                </div>
                            )}
                            {activeActivity === "robotics" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <RoboticsGrid />
                                </div>
                            )}
                            {activeActivity === "alura" && (
                                <div className="h-full duration-500 animate-in fade-in">
                                    <AluraGrid />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Section>
            <Image
                src={bottomWave}
                alt="bottom wave figure"
                className="absolute bottom-0 fill-primary"
            />
        </div>
    );
}
