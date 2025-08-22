"use server"
import React from 'react'
import ItemModel from '@/models/item'
import connection from '@/config/db'

const getdataProfile = async (email_) => {
    await connection;
        let aa = await ItemModel.find({email:email_}).lean();
        const data = aa.map(e => {
            return {
                unid: JSON.stringify(e._id),
                name: e.name,
                title: e.title,
                contact: e.contact,
                email: e.email,
                category: e.category,
                description: e.description,
                date: e.date,
                place: e.place,
                imageUrl:e.imageUrl
            };
        })
        return data;

}

export default getdataProfile
