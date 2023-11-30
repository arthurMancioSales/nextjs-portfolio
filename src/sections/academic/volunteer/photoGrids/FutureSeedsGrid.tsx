import Image from "next/image"

export default function FutureSeedsGrid() {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full aspect-square">
            <div className="row-span-2 col-span-2 bg-accent w-full h-full aspect-square relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="row-span-1 col-span-1 bg-accent w-full h-full aspect-square relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="row-span-2 col-span-1 bg-accent w-full h-full aspect-video relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="row-start-3 col-start-1 col-span-2 bg-accent w-full h-full aspect-video relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
        </div>
    )
}
