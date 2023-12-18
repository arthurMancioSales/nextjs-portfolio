import Image from "next/image"

export default function MITxGrid() {
    return (
        <div className="grid grid-cols-4 grid-rows-2 h-full gap-2">
            <div className="row-span-2 col-span-1 bg-accent w-full h-full aspect-video relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="row-span-1 col-span-2 bg-accent w-full h-full aspect-video relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="row-start-2 col-start-2 bg-accent w-full h-full aspect-square relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="row-start-2 col-start-3 bg-accent w-full h-full aspect-square relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
            <div className="row-span-2 col-span-1 bg-accent w-full h-full aspect-video relative">
                {/* <Image src={} alt="" fill className="object-cover"></Image> */}
            </div>
        </div>
    )
}
