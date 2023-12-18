import Image from "next/image";

export default function FutureSeedsGrid() {
    return (
        <div className="grid aspect-square h-full grid-cols-3 grid-rows-3 gap-2">
            <div className="relative col-span-2 row-span-2 aspect-square h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="relative col-span-1 row-span-1 aspect-square h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="relative col-span-1 row-span-2 aspect-video h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="relative col-span-2 col-start-1 row-start-3 aspect-video h-full w-full bg-accent">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
        </div>
    );
}
