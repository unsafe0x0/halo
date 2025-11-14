import { NextRequest, NextResponse } from "next/server";
import DbClient from "@/prisma/DbClient";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import bcrypt from "bcryptjs";

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, password, githubUsername } = await req.json();

    const updatedData: { [key: string]: any } = {};
    if (name) updatedData.name = name;
    if (githubUsername) updatedData.githubUsername = githubUsername;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updatedData.password = hashedPassword;
    }

    const userId = session.user.id;

    const updatedUser = await DbClient.user.update({
      where: { id: userId },
      data: updatedData,
    });

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
