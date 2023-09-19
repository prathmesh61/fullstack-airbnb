import User from "@/Model/User";
import { connectMongoDB } from "@/lib/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectMongoDB();
  const { email, name, image } = await req.json();
  try {
    const user = new User({
      email,
      name,
      image,
    });
    await user.save();
    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
