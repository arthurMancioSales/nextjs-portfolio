import Link from "next/link";
import { ScrollAnchor } from "../scrollAnchor/ScrollAnchor";

export function Navbar() {
    return (
        <div className="fixed z-30 h-fit w-screen py-4" id="navbar">
            <div className="m-auto flex max-w-7xl justify-between">
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
    );
}
