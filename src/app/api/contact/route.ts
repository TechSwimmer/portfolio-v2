import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(
    process.env.RESEND_API_KEY
);

export async function POST(
    request: Request
) {
    try {
        const body = await request.json()

        const {
            name, email, message,
        } = body

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    message: "All fields are required",
                },
                { status: 400 }
            );
        }

        // send email
        await resend.emails.send({
            from:
                "Portfolio Contact <onboarding@resend.dev>",

            to:
                process.env
                    .CONTACT_EMAIL!,

            replyTo: email,

            subject:
                `New Portfolio Message from ${name}`,

            html: `
    <div
      style="
        font-family:
        Arial,
        sans-serif;

        max-width:
        600px;

        margin:
        auto;

        padding:
        24px;

        border:
        1px solid #e5e7eb;

        border-radius:
        16px;
      "
    >
      <h1
        style="
          margin-bottom:
          20px;
        "
      >
        📩 New Portfolio Contact
      </h1>

      <div
        style="
          margin-bottom:
          16px;
        "
      >
        <strong>
          Name:
        </strong>

        <p>
          ${name}
        </p>
      </div>

      <div
        style="
          margin-bottom:
          16px;
        "
      >
        <strong>
          Email:
        </strong>

        <p>
          ${email}
        </p>
      </div>

      <div
        style="
          margin-bottom:
          16px;
        "
      >
        <strong>
          Message:
        </strong>

        <p
          style="
            line-height:
            1.7;
          "
        >
          ${message}
        </p>
      </div>

      <hr
        style="
          margin:
          24px 0;
        "
      />

      <p
        style="
          color:
          #6b7280;

          font-size:
          14px;
        "
      >
        Sent on:
        ${new Date().toLocaleString()}
      </p>
    </div>
  `,
        });

        return NextResponse.json({
            message: "Message sent successfully!",
        })
    }
    catch (err) {
        console.error(err);
        return NextResponse.json(
            {
                message: "Something went wrong",
            },
            { status: 500 }
        );
    }
}