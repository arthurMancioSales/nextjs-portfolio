import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card/card";
import { ScrollText } from "lucide-react";

export default function DigitalAge() {
    return (
        <div className="flex h-full w-screen gap-16">
            <div className="flex w-3/4 flex-col justify-between gap-3">
                <h2 className="text-3xl font-bold uppercase">Horizon 2100</h2>
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
                <div className="aspect-square w-20 self-end bg-accent">
                    {/* <Image src={} alt="" fill className="object-cover"></Image> */}
                </div>
            </div>

            <Card className="w-1/4">
                <CardHeader>
                    <CardTitle>
                        <ScrollText className="mx-auto h-36 w-36 text-foreground" />
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
        </div>
    );
}
