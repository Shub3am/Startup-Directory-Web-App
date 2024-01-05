import { sqlite3 } from "sqlite3";
import { NextResponse, NextRequest } from "next/server";
export async function POST(request: NextRequest) {
    const data = await request.body
    let pageNo = request.body.page
    pageNo ? null : pageNo = 0
    pageNo = String(pageNo) + '0'
    query = `select * from ${Table} where Industry != 'Unknown' AND Description IS NOT NULL ORDER BY ID DESC LIMIT 12 OFFSET ${Number(pageNo)}`
    db.all(query, (err,rows)=> {
 
        err ? res.status(404).json(`Error Occured Due to ${err}`) : res.json(rows)
    }) 


}