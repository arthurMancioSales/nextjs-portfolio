import FutureSeeds from "./projects/FutureSeeds"
import ShineInside from "./projects/ShineInside"

export default function Volunteer() {
    return (
        <>
            <FutureSeeds />
            <section className="w-screen h-[90vh]">
                <iframe
                    src="https://www.theasys.io/viewer/yojCmz79JtQj5cjh8ewURw6BLiwczo"
                    allow="vr;gyroscope;accelerometer"
                    width={"100%"}
                    height={"100%"}
                />
            </section>
            <ShineInside />
        </>
    )
}
