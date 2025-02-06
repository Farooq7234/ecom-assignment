import { connectToDatabase } from "@/lib/db";
import UserModel from "@/app/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { User } from "next-auth";
import mongoose from "mongoose";

export async function GET() {
  await connectToDatabase();

  const session = await getServerSession(authOptions);
  const _user: User = session?.user as User;

  if (!session || !_user) {
    return Response.json(
      { success: false, message: "Not authenticated" },
      { status: 401 }
    );
  }

  const userId = new mongoose.Types.ObjectId(_user._id);

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return Response.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const userInterests = user.interests;

    return Response.json(
      { messages: "User Interests", userInterests },

      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json({ message: error, success: false }, { status: 500 });
  }
}
