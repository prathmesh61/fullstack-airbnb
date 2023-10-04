import Room from "@/Model/Room";
import { connectMongoDB } from "@/lib/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const {
    title,
    price,
    description,
    state,
    country,
    rooms,
    guests,
    address,
    image,
    email,
    categories,
  } = await req.json();

  try {
    await connectMongoDB();
    const home = new Room({
      title,
      price,
      description,
      state,
      country,
      rooms,
      guests,
      address,
      image,
      category: categories,
      OwnerEmail: email,
    });
    await home.save();
    return NextResponse.json(home, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
};

// Get all homes

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectMongoDB();

    const getAllHome = await Room.find();
    return NextResponse.json(getAllHome, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
};
