type InputProps = {
    id: string;
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}

export default function Input({
    id,
    name,
    label,
    type="text",
    placeholder,
    required = false,
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full min-w-0 bg-(--inputbackground) rounded-2xl p-3 text-base text-(--h2altcolor) focus-visible:outline-2 focus-visible:outline-(--foreground)"
            />
        </div>
    );
}
