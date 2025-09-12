"use server";

import nodemailer from "nodemailer";

interface SendEmailProps {
  name: string;
  email: string;
  phone: string;
  message?: string;
  role: string;
  file: File | null;
}

export async function sendEmail(data: SendEmailProps) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const body = `
    <h2>Nova mensagem recebida</h2>
    <p><strong>Nome:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Telefone:</strong> ${data.phone}</p>
    <p><strong>Cargo/Função:</strong> ${data.role}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${data.message}</p>
  `;

  let attachments = [];

  if (data.file) {
    const arrayBuffer = await data.file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    attachments.push({
      filename: data.file.name,
      content: buffer,
      contentType: data.file.type,
    });
  }

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_TO,
    subject: "Trabalhe Conosco",
    html: body,
    attachments,
  });
}
