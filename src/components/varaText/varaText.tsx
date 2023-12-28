import { useEffect, useState } from "react";
import Vara from "vara";

export default function VaraText({ text }: { text: string }) {
    const [render, setRender] = useState(false);
    useEffect(() => {
        if (!render) {
            setRender(true);
            return;
        }

        const vara = new Vara("#vara-container", "/greatVibes.json", [
            {
                text,
                fontSize: 40,
                strokeWidth: 0.7,
            },
        ]);
    }, [render, text]);

    return <div id="vara-container" className="z-[20]" />;
}
