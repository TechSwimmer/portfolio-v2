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

    const [status, setStatus] =
        useState<{
            type: 'success' | "error";
            message: string;
        } | null>(null)

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
            // validation

            if (
                !formData.name ||
                !formData.email ||
                !formData.message
            ) {
                setStatus({
                    type: "error",
                    message: "Please fill all fields",
                });

                return;
            }
            // email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (
                !emailRegex.test(
                    formData.email
                )
            ) {
                setStatus({
                    type: "error",
                    message: "Please enter a valid email."
                });

                return;
            }
            // message length
            if (
                formData.message.length <
                10
            ) {
                setStatus({
                    type: "error",
                    message:
                        "Message must be at least 10 characters",
                });

                return;
            }

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

            setStatus({
                type: response.ok
                    ? "success" : "error",

                message: data.message,
            })

            // reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
        catch (err) {
            console.error(err)
            setStatus({
                type: "error",
                message: "Something went wrong",
            });
        }
        finally {
            setLoading(false)
        }
    };



    return (
        <section className="max-w-4xl mx-auto px-6 py-24" id="contact">
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
                {status && (
                    <div
                        className={`rounded-xl p-4 text-sm ${status.type ===
                            "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                    >
                        {status.message}
                    </div>
                )}
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