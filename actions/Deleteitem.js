"use server"
import React from 'react'
import connection from '@/config/db'
import ItemModel from '@/models/item'
import cloudinary from "@/lib/cloudinary";

const Deleteitem = async (id, url) => {
    const cleanId = JSON.parse(id);
    const item = await ItemModel.findByIdAndDelete(cleanId);
    const lastPart = url.split("/").pop(); //
    const publicId = lastPart.split(".")[0];
    await cloudinary.uploader.destroy(publicId);
    return true;

}

export default Deleteitem
