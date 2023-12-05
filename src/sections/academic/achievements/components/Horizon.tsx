import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card/card"
import { ScrollText } from "lucide-react"

export default function Horizon() {
    return (
        <div className="w-screen h-full flex gap-16">
            <Card className="w-1/4">
                <CardHeader>
                    <CardTitle>
                        <ScrollText className="w-36 h-36 text-foreground mx-auto" />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="indent-6 leading-6 text-foreground/80">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nisi autem voluptatem, fuga soluta voluptatum,
                        pariatur recusandae officia nihil ad quis eos, ut eum
                        veritatis magnam expedita excepturi sequi laborum at!
                    </p>
                </CardContent>
            </Card>
            <div className="w-3/4 flex flex-col justify-between gap-3">
                <h2 className="uppercase font-bold text-3xl">Horizon 2100</h2>
                <div className="flex flex-col gap-1">
                    <p className="indent-6 leading-6 text-foreground/80">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus sequi reprehenderit maiores! Quibusdam
                        vitae aperiam quas deserunt cumque quam repudiandae
                        tempore odio odit doloribus dignissimos, laborum. Iure
                        autem quas corrupti inventore!
                    </p>
                    <p className="indent-6 leading-6 text-foreground/80">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus sequi reprehenderit maiores! Quibusdam
                        vitae aperiam quas deserunt cumque quam repudiandae
                        tempore odio odit doloribus dignissimos, placeat, soluta
                        cupiditate! Voluptatum, minima in similique, ducimus
                        temporibus nemo consequatur possimus hic vitae sint
                        asperiores id fuga amet laborum. Iure autem quas
                        corrupti inventore!
                    </p>
                    <p className="indent-6 leading-6 text-foreground/80">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus sequi reprehenderit maiores! Quibusdam
                        vitae aperiam quas deserunt cumque quam repudiandae
                        tempore odio odit doloribus dignissimos, placeat, soluta
                        cupiditate! Voluptatum, minima in similique, ducimus
                        temporibus nemo consequatur possimus hic vitae sint
                        asperiores id fuga amet laborum. Iure autem quas
                        corrupti inventore!
                    </p>
                </div>
                <div className="self-end bg-accent aspect-square w-20">
                    {/* <Image src={} alt="" fill className="object-cover"></Image> */}
                </div>
            </div>
        </div>
    )
}
