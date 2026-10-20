export async function sendContactMessage(formData: FormData): Promise<void> {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

    if (!accessKey) {
        throw new Error("The contact form is not configured yet.");
    }

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            ...Object.fromEntries(formData),
            access_key: accessKey,
        }),
    });

    const result: unknown = await response.json().catch(() => null);
    const sent = typeof result === "object" && result !== null &&
        "success" in result && result.success === true;

    if (!response.ok || !sent) {
        throw new Error("Cannot send message. Please try again.");
    }
}
