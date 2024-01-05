import {prisma} from "@/app/db"
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
    const body: {startup: {name:string,description:string,date: Date,industry: string, funding: number, investor: string, city: string}} = await request.json();
    const data = body.startup;
    Object.keys(data).forEach(property=> { data[property.toUpperCase()] = data[property]
    delete data[property]})
    const result = await prisma.startups.create({data: body.startup})
    
    return NextResponse.json(result)
} catch(err) {
    return NextResponse.json(`Page Property Missing ${err}`)
}
    

}
    

