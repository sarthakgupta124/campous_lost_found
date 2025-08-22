
"use server"
import connection from '@/config/db';
import UserModel from '@/models/user';
import React from 'react'
import nodemailer from "nodemailer";
import otpModel from '@/models/otp';
import bcrypt from 'bcryptjs';

const sendotp = async (email_id) => {
  await connection;
  const res = await UserModel.findOne({ email: email_id });
  if (res) {
    let otp=Math.floor(100000 + Math.random() * 900000).toString();
    const hashedotp = await bcrypt.hash(otp, 10);
    await otpModel.create({
      email:email_id,
      otp:hashedotp
    })
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      
      const info = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to:`${email_id}`,
        subject: "Hello From Lost&Found",
        text: `This is a System Generated Mail ${otp} is Your OTP Valid For 2 MIN.`,
      });

      console.log("✅ Email sent:", info.response);
    } catch (err) {
      console.error("❌ Error:", err);
    }
    return true;

  }
  else{
    return false;
  }


}

export default sendotp

