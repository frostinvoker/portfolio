"use client";

import { useState, type SubmitEvent } from "react";
import { Check, LoaderCircle, X } from "lucide-react";
import { sendContactMessage } from "@/lib/contact";
import Input from "./atoms/input";
import TextArea from "./atoms/textArea";
import Button from "./atoms/button";

type SubmissionStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<SubmissionStatus>("idle");
    const isSubmitting = status === "sending";

    const buttonLabel = {
        idle: "Send message",
        sending: "Sending message",
        success: "Message sent!",
        error: "Couldn't send. Try again.",
    }[status];

    const buttonBackground = {
        idle: "var(--foreground)",
        sending: "var(--foreground)",
        success: "var(--successcolor)",
        error: "var(--errorcolor)",
    }[status];

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isSubmitting) return;

        const form = event.currentTarget;
        const formData = new FormData(form);

        setStatus("sending");

        try {
            await sendContactMessage(formData);
            form.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }
    return (
        <form onSubmit={handleSubmit} data-scroll-reveal>
            <div className="flex flex-col p-3 gap-3">
                <Input 
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Enter your Name..."
                    required={true}
                />
                <Input 
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your Email..."
                    required={true}
                />
                <TextArea 
                    id="message"
                    name="message"
                    label="Message"
                    placeholder="Write your message here..."
                    required={true}
                />
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label={buttonLabel}
                    aria-busy={isSubmitting}
                    style={{
                        backgroundColor: buttonBackground,
                        color: status === "success" ? "var(--background)" : "var(--h2altcolor)",
                    }}
                    className="flex h-11 w-full min-w-0 items-center justify-center gap-2 overflow-hidden transition-colors duration-300 ease-in motion-reduce:transition-none"
                >
                    {isSubmitting ? (
                        <LoaderCircle aria-hidden="true" className="size-5 shrink-0 animate-spin motion-reduce:animate-none" />
                    ) : (
                        <>
                            {status === "success" && (
                                <Check aria-hidden="true" className="size-5 shrink-0" />
                            )}
                            {status === "error" && (
                                <X aria-hidden="true" className="size-5 shrink-0" />
                            )}
                            <span className="min-w-0 truncate">{buttonLabel}</span>
                        </>
                    )}
                </Button>
                <span role="status" aria-live="polite" className="sr-only">
                    {status === "idle" ? "" : buttonLabel}
                </span>
            </div>
        </form>
    );
}
