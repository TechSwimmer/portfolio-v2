import { NextResponse } from "next/server";
import { send } from "process";
import { Resend } from "resend";

const resend = new Resend(
    process.env.RESEND_API_KEY
);

export async function POST(
    request: Request
) {
    try{
        const body = await request.json()

        const {
            name, email, message,
        } = body

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    message: "All fields are required",
                },
                {status:400}
            );
        }

        // send email
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL!,
            subject: `Portfolio contact from ${name}`,
            html: `
                <h2>New Portfolio Contact</h2>
                <p>
                    <strong>Name:</strong>
                    ${name}
                </p>
                <p>
                    <strong>Email:</strong>
                    ${email}
                </p>
                <p>
                    <strong>Message:</strong>
                </p>
                <p>
                    ${message}
                </p>
                `,
        });

        return NextResponse.json({
            message: "Message sent successfully!",
        })
    }
    catch(err){
        console.error(err);
        return NextResponse.json(
            {
                message: "Something went wrong",
            },
            {status:500}
        );
    }
}