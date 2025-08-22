"use server"
import ItemModel from '@/models/item'
import connection from '@/config/db'

const getdata = async (cat) => {
    await connection;
    if (cat === "All Categories") {
        let aa = await ItemModel.find().lean();
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
    else {
        let aa = await ItemModel.find({ category: cat }).lean();

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
}

export default getdata
