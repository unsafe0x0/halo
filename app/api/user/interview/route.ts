import { NextRequest, NextResponse } from "next/server";
import DbClient from "@/prisma/DbClient";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import interviewId from "@/utils/InterviewId";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const interviewIdGen = interviewId();
    const body = await req.json();

    const { outcome, status = "completed" } = body;

    if (!outcome) {
      return NextResponse.json(
        { error: "Missing outcome data" },
        { status: 400 },
      );
    }

    const interview = await DbClient.interview.create({
      data: {
        userId,
        interviewId: interviewIdGen,
        model: body.model || "unknown",
        position: body.position || "Unknown Position",
        status,
        strengths: outcome.strengths || [],
        improvements: outcome.improvements || [],
        score: outcome.score || 0,
      },
    });

    return NextResponse.json({
      success: true,
      interviewId: interview.interviewId,
      data: interview,
    });
  } catch (error) {
    console.error("Error storing interview:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
