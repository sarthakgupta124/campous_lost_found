
"use server"
import React from 'react'
import UserModel from "@/models/user";
import connection from "@/config/db";
import bcrypt from "bcryptjs";

const register = async (form) => {
  await connection;
  const existingUser = await UserModel.findOne({ email: form.email });
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(form.password, 10);
    const newUser = await UserModel.create({
      name: form.name,
      email: form.email,
      password: hashedPassword,
      contact: form.contact
    });
    return true;
    console.log("created user")
  }
  return false;
}

export default register



