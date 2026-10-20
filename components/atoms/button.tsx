import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function Button({
    children,
    type = "button",
    className = "",
    ...props
    }: ButtonProps) {
    return (
        <button
            {...props}
            type={type}
            className={`min-h-11 bg-(--foreground) rounded-2xl p-2 text-(--h2altcolor) font-semibold cursor-pointer disabled:cursor-wait focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--foreground) ${className}`}
        >
            {children}
        </button>
    )
}
