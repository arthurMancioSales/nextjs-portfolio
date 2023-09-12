import Link from "next/link"
import { ScrollAnchor } from "../scrollAnchor/ScrollAnchor"

export function Navbar() {
    return (
        <div
            className="w-screen py-5 flex justify-between px-20 fixed z-30 h-fit"
            id="navbar"
        >
            <h1 className="text-2xl font-bold">
                <Link href={"/"}>Arthur</Link>
            </h1>

            <nav>
                <ul className="flex gap-3">
                    <li>
                        <ScrollAnchor target="#homeSection">Home</ScrollAnchor>
                    </li>
                    <li>
                        <ScrollAnchor target="#aboutSection">
                            About me
                        </ScrollAnchor>
                    </li>
                    <li>
                        <ScrollAnchor target="#extraSection">
                            Extra Activities
                        </ScrollAnchor>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
