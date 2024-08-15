import { NextResponse } from "next/server";
import connectDB from "../../../../lib/connectDB";
import Favorite from "@/models/Favorite";

export async function POST(request) {
    await connectDB(); // เชื่อมต่อฐานข้อมูล

    const { productId, isFavorited } = await request.json(); // รับข้อมูลจาก request body

    try {
        // บันทึกสถานะการบันทึกในฐานข้อมูล
        const existingFavorite = await Favorite.findOne({ productId });

        if (existingFavorite) {
            existingFavorite.isFavorited = isFavorited;
            await existingFavorite.save(); // อัปเดตสถานะ
        } else {
            const newFavorite = new Favorite({ productId, isFavorited });
            await newFavorite.save(); // สร้างเอกสารใหม่
        }

        return NextResponse.json({ message: 'Favorite status updated' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update favorite status' }, { status: 500 });
    }
}