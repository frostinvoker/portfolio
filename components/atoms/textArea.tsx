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
                    className="bg-(--inputbackground) rounded-2xl p-3 text-(--h2altcolor) focus:outline-hidden"
                />
            </div>
        );
    }