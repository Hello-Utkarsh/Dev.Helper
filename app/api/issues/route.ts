import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client';;
import { z } from 'zod';

const createIssueschema=z.object({
    title:z.string().min(1).max(200), //
    discription:z.string().min(1)
  }) 

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsedInput=createIssueschema.safeParse(body)
  if (!parsedInput.success) {
    return NextResponse.json(parsedInput.error.errors, {status: 400})
  }
  const createIssue = await prisma.issue.create({ 
    data: {title: body.title, discription: body.discription}
})
  return NextResponse.json(createIssue)
}