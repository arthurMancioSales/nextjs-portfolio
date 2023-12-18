import Image from "next/image";

export default function MITxGrid() {
    return (
        <div className="grid h-full grid-cols-4 grid-rows-2 gap-2">
            <div className="relative col-span-1 row-span-2 aspect-video h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="relative col-span-2 row-span-1 aspect-video h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="relative col-start-2 row-start-2 aspect-square h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="relative col-start-3 row-start-2 aspect-square h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="relative col-span-1 row-span-2 aspect-video h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
        </div>
    );
}
