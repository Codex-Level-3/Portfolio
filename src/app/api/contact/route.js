import nodemailer from "nodemailer";
export async function POST(req, res) {
  const { name, email, message } = await req.json();
  const EMAIL = process.env.EMAIL;
  const PASS = process.env.PASS;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: EMAIL,
    subject: `New message from ${email}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent ${info.response}`);
    return new Response(JSON.stringify({ status: "Message sent" }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Error sending email", {
      status: 500,
    });
  }
}
