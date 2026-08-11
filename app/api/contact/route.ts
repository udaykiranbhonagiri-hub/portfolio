import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    // ================= Validation =================

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    // ================= Email Validation =================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // ================= Send Email =================

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            padding: 30px;
            color: #111827;
          "
        >
          <h1
            style="
              margin-bottom: 25px;
              color: #2563eb;
            "
          >
            New Portfolio Message
          </h1>

          <div
            style="
              margin-bottom: 20px;
              padding: 20px;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              background: #f9fafb;
            "
          >
            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            <p>
              <strong>Subject:</strong>
              ${escapeHtml(subject)}
            </p>
          </div>

          <div
            style="
              padding: 20px;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
            "
          >
            <h2>Message</h2>

            <p
              style="
                line-height: 1.7;
                white-space: pre-wrap;
              "
            >
              ${escapeHtml(message)}
            </p>
          </div>

          <p
            style="
              margin-top: 25px;
              font-size: 13px;
              color: #6b7280;
            "
          >
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    // ================= Resend Error =================

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send the message.",
        },
        {
          status: 500,
        }
      );
    }

    // ================= Success =================

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}

// ================= HTML Safety =================

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}