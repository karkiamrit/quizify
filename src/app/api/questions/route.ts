import { NextResponse } from "next/server"

export const POST=async (req:Request,res:Response)=>{
    return NextResponse.json({
        hello:'world'
    })
}