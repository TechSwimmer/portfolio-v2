"use client"
import { useState } from "react"
import SectionHeading from "../ui/SectionHeading"
import PrimaryButton from "../ui/PrimaryButton"

type FormData = {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {

    const [formData, setFormData] =
        useState<FormData>({
            name: "",
            email: "",
            message: "",
        });

    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response =
                await fetch(
                    '/api/contact',
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify(formData),
                    }
                );

            const data = await response.json();

            alert(data.message);

            // reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
        catch (err) {
            console.error(err)
            alert("Something went wrong");
        }
        finally {
            setLoading(false)
        }
    };



    return (
        <section className="max-w-4xl mx-auto px-6 py-24">
            <SectionHeading
                eyebrow="Contact"
                title="let's work together"
                description="Have a projet idea or opportunity? Feel free to reach out."
            />

            <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 p-4 outline-none"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 p-4 outline-none"
                />

                <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 p-4 outline-none"
                />
                <PrimaryButton
                    text={
                        loading
                            ? "Sending..."
                            : "Send Message"
                    }
                    type="submit"
                    disabled={loading}
                />
            </form>
        </section>
    )
}