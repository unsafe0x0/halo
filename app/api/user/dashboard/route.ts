import { NextRequest, NextResponse } from "next/server";
import DbClient from "@/prisma/DbClient";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const userData = await DbClient.user.findUnique({
      where: { id: userId },
      include: {
        interviews: true,
      },
    });

    const scores =
      userData?.interviews.map((interview) => interview.score) || [];
    const dates =
      userData?.interviews.map((interview) => {
        const date = new Date(interview.createdAt);
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      }) || [];

    return NextResponse.json(
      { user: userData, scores, dates },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
