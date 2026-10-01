import {NextResponse} from "next/server";
export async function POST(req:Request){
 const f=await req.formData();
 const name=String(f.get("name")||"").trim(); const email=String(f.get("email")||"").trim(); const message=String(f.get("message")||"").trim();
 if(!name||!email||!message) return NextResponse.json({error:"Required fields missing"},{status:400});
 // Delivery can be connected to the client's preferred mailbox/provider before launch.
 return NextResponse.json({ok:true});
}
