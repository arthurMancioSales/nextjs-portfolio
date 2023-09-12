import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva("min-w-[100vw] h-screen px-20 pt-20", {
    variants: {
        variant: {
            default: "bg-background text-foreground-foreground",
            secondary: "bg-secondary text-secondary-foreground",
            ghost: "bg-transparent text-foreground-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export interface ISectionProps
    extends React.AllHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof sectionVariants> {}

export function Section({ children, variant, className, id }: ISectionProps) {
    return (
        <div className={cn(sectionVariants({ variant, className }))} id={id}>
            {children}
        </div>
    )
}
