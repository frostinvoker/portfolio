import Input from "./atoms/input";
import TextArea from "./atoms/textArea";
import Button from "./atoms/button";

export default function ContactForm() {
    return (
        <form>
            <div className="flex flex-col p-3 gap-3">
                <Input 
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Enter your Name..."
                />
                <Input 
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="Enter your Email..."
                />
                <TextArea 
                    id="message"
                    name="message"
                    label="Message"
                    placeholder="Write your message here..."
                />
                <Button type="submit">
                    Send Message
                </Button>
            </div>
        </form>
    );
}