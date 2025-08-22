"use server"
import React from 'react'
import ItemModel from "@/models/item";
import connection from "@/config/db";
const itemregister = async (form, email_add, name_, contact_,url) => {
    await connection;
    form.imageUrl=url;
    console.log(form)
    const newitem = await ItemModel.create({
        name: name_,
        contact: contact_,
        email: email_add,
        title: form.title,
        category: form.category,
        description: form.description,
        date: form.date,
        place: form.place,
        imageUrl:url,
    })
}

export default itemregister
