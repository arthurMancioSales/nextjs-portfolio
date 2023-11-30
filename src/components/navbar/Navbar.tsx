import Link from "next/link"
import { ScrollAnchor } from "../scrollAnchor/ScrollAnchor"

export function Navbar() {
    return (
        <div className="py-4 w-screen fixed z-30 h-fit" id="navbar">
            <div className="m-auto flex justify-between max-w-7xl">
                <h1 className="text-2xl font-bold">
                    <Link href={"/"}>Arthur</Link>
                </h1>

                <nav>
                    <ul className="flex gap-3">
                        <li>
                            <ScrollAnchor target="#homeSection">
                                Home
                            </ScrollAnchor>
                        </li>
                        <li>
                            <ScrollAnchor target="#aboutSection">
                                About me
                            </ScrollAnchor>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
