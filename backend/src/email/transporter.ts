import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: "Barselona_park@mail.ru",
    pass: process.env.NODEMAILER,
  },
});