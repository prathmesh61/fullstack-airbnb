import Room from "@/Model/Room";
import { connectMongoDB } from "@/lib/ConnectionDB";
import { NextRequest, NextResponse } from "next/server";
// Fetch single home

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
  res: NextResponse
) => {
  await connectMongoDB();
  try {
    const { id } = params;
    const room = await Room.findById(id);
    return NextResponse.json(room);
  } catch (error) {
    return NextResponse.json({ error: "Room not found" }, { status: 404 });
  }
};
