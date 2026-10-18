type TextareaProps = {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    
};

export default function TextArea({
    id,
    name,
    label,
    placeholder,
    required = false,
    rows=8,
    }: TextareaProps ) {
        return(
            <div className="flex flex-col gap-2">
                <label htmlFor={id}>
                    {label}
                </label>
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    rows={rows}
                    className="w-full min-w-0 resize-y bg-(--inputbackground) rounded-2xl p-3 text-base text-(--h2altcolor) focus-visible:outline-2 focus-visible:outline-(--foreground)"
                />
            </div>
        );
    }
