import {prisma} from "@/app/db"
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
    const body: {page: number} = await request.json()
    let pageNo: number = body.page
    pageNo = String(pageNo) + '0'
    const data = await prisma.startups.findMany({take: 10,skip: Number(pageNo), orderBy: [ {ID: "desc"}] })
    return NextResponse.json(data)
} catch(err) {
    return NextResponse.json(`Page Property Missing ${err}`)
}
    

}
    

