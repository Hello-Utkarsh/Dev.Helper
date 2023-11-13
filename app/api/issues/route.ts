import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

const createIssueschema = z.object({
  title: z.string().min(1).max(200), //
  description: z.string().min(1),
});

// export default async function handler(req: NextRequest, res: NextResponse) {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       return GET();
//     case 'POST':
//       return POST(req, res);
//     // case 'PUT':
//     //   return handlePut(req, res);
//     // case 'DELETE':
//     //   return handleDelete(req, res);
//     // default:
//     //   res.status(405).end(); // Method Not Allowed
//   }
// }

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const parsed_data = createIssueschema.safeParse(body);
    if (!parsed_data.success) {
      return NextResponse.json(parsed_data.error.errors, { status: 400 });
    }

    const createIssue = await prisma.issue.create({
      data: { title: body.title, discription: body.description },
    });

    return NextResponse.json(
      createIssue,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET() {
  const posts = await prisma.issue.findMany();
  return NextResponse.json(posts);
}
