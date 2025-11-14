import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendResendEmail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  if (!to || !subject || !body) {
    throw new Error("Missing required fields");
  }
  const data = await resend.emails.send({
    from: "Halo <no-reply@send.priyanxhu.me>",
    to,
    subject,
    html: body,
  });
  if (data.error) throw new Error(data.error.message || "Resend error");
  return data;
}
