type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

export default function Button({
    children,
    type = "button",
    disabled = false,
    }: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className="bg-(--foreground) rounded-2xl p-2 text-(--h2altcolor) font-semibold hover:cursor-pointer" 
        >
            {children}
        </button>
    )
}