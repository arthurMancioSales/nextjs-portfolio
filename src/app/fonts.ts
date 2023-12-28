// eslint-disable-next-line camelcase
import { Merriweather, Dancing_Script, Great_Vibes } from "next/font/google";

export const merriweather = Merriweather({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "700"],
    variable: "--font-merriweather",
});

export const dancingScript = Dancing_Script({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dancing-script",
});

export const greatVibes = Great_Vibes({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
    variable: "--font-great-vibes",
});
