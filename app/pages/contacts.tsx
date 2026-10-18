import ContactForm from "../../components/contactForm"

export default function Contacts() {
    return(
        <section id="contacts" className="min-h-dvh flex flex-col gap-5">
            <div data-scroll-reveal className="flex flex-col">
                <h1 className="text-(--h1color)">LET&apos;S WORK</h1>
                <h1 className="text-(--h1altcolor)">TOGETHER</h1>
            </div>
            <ContactForm />
        </section>
    );
}
