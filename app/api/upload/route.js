"use server"
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  const form = await req.formData();
  const file = form.get("file");
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, res) => (err ? reject(err) : resolve(res)))
      .end(buffer);
  });

  return NextResponse.json({ url: result.secure_url });
}
