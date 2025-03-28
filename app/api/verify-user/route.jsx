import { Users } from "@/config/schema";
import {db} from "@/config/db"
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {user} = await req.json();


 try{
    // if user already exist
  const userInfo = await db.select().from(Users)
  .where(eq(Users.email,user?.primaryEmailAddress.emailAddress))
  console.log("User",userInfo); 
  if(userInfo?.length==0){
    const SaveResult = await db.insert(Users).values({
        name:user?.fullName,
        email:user?.primaryEmailAddress.emailAddress,
        imageUrl:user?.imageUrl,
    }).returning({Users})
    return NextResponse.json({'reult':SaveResult[0].Users})
  }
  return NextResponse.json({'result':userInfo[0]})
 }
 catch(e){
    return NextResponse.json({error:e})
 }

    
}