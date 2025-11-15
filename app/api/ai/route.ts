import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

function removeThinkTags(text: string) {
  return text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const client = new Groq({
      apiKey: session?.user?.apiKey || process.env.GROQ_API_KEY!,
    });

    const { model, messages, promptType } = await req.json();

    const systemPrompts: Record<string, string | undefined> = {
      chat: process.env.SYSTEM_PROMPT_CHATS,
      interview: process.env.SYSTEM_PROMPT_INTERVIEW,
    };

    const systemPromptContent =
      systemPrompts[promptType] || process.env.SYSTEM_PROMPT_CHATS || "";

    const systemPrompt = {
      role: "system",
      content: systemPromptContent,
    };

    const completion = await client.chat.completions.create({
      model,
      messages: [systemPrompt, ...messages],
    });

    const raw = completion.choices[0].message.content ?? "";
    const cleaned = removeThinkTags(raw);

    return NextResponse.json({ output: cleaned });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
