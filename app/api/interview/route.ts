import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import type {
  ChatCompletionMessageParam,
  ChatCompletionRole,
  ChatCompletionSystemMessageParam,
} from "groq-sdk/resources/chat/completions.js";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

interface ReviewMessage {
  role: "user" | "assistant" | "ai";
  content: string;
  name?: string;
}

interface OutcomePayload {
  interviewId?: string;
  candidate?: string;
  messages?: ReviewMessage[];
}

function removeThinkTags(text: string) {
  return text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const client = new Groq({
      apiKey: session?.user?.apiKey || process.env.GROQ_API_KEY!,
    });

    const payload: OutcomePayload = await req.json();

    const systemPromptContent =
      'You are an interviewing coach evaluating a technical interview transcript. Treat "ai" messages as interviewer questions and "user" messages as the candidate\'s answers. Produce a JSON object containing only {status, type, position, strengths, improvements, score}. Strengths and improvements must be arrays of strings. Score must be an integer between 0 and 10. Do not output any other fields. Do not invent details not present in the transcript. If the interview is short, keep feedback minimal and fully grounded in the transcript. Respond with JSON only.';

    const systemPrompt: ChatCompletionSystemMessageParam = {
      role: "system",
      content: systemPromptContent,
    };

    const bodyMessages = payload.messages ?? [];
    const mappedMessages: ChatCompletionMessageParam[] = bodyMessages.map(
      (message) => {
        const role: ChatCompletionRole =
          message.role === "ai" ? "assistant" : message.role;

        return {
          role,
          content: message.content,
          ...(message.name ? { name: message.name } : {}),
        };
      }
    );

    const messages: ChatCompletionMessageParam[] = [
      systemPrompt,
      ...mappedMessages,
    ];

    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages,
      temperature: 0.2,
    });

    const raw = completion.choices[0]?.message.content ?? "";
    const cleaned = removeThinkTags(raw);

    let parsed;

    try {
      parsed = JSON.parse(cleaned);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON returned by model" },
        { status: 400 }
      );
    }

    if (!parsed || typeof parsed !== "object") {
      return NextResponse.json(
        { error: "Model response was not a valid JSON object" },
        { status: 400 }
      );
    }

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
