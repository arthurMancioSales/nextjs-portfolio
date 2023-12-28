import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const Section = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div className="">
            <div
                className={cn(
                    "w-screen h-screen max-w-7xl mx-auto py-[5vh]",
                    className,
                )}
                {...props}
                ref={ref}
            >
                {children}
            </div>
        </div>
    ),
);
Section.displayName = "Section";

export { Section };
