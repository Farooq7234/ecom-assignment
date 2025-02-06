import { connectToDatabase } from "@/lib/db";
import UserModel from "@/app/models/User";

export async function POST(request: Request) {
  await connectToDatabase();

  try {
    const { userId, interests } = await request.json();

    if (!userId || !Array.isArray(interests)) {
      return Response.json({
        error:
          "Invalid request body. Must include userId and an array of interests.",
      });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { interests },
      { new: true }
    );

    if (!updatedUser) {
      return Response.json({ error: "User not found", status: 404 });
    }

    return Response.json(
      {
        success: true,
        message: "User registered successfully. Please verify your account.",
        user: updatedUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      { status: 500 }
    );
  }
}
