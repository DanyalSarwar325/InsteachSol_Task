import { NextResponse } from "next/server";
import DbConnect from "@/app/lib/dbConnect";
import Ticket from "@/app/models/ticket";

export async function POST(req: Request) {
  try {
    await DbConnect();

    // Read raw body for debugging (some clients may send empty body or different content-type)
    const data= await req.json();
    console.log(" request body:", data);

    // let data: any = {};
    // try {
    //   data = raw ? JSON.parse(raw) : {};
    // } catch (parseError) {
    //   console.error("Failed to parse JSON body:", parseError);
    //   return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    // }

    // console.log("Parsed ticket data:", data);

    const ticket = await Ticket.create(data);
    console.log("Created ticket:", ticket);
    return NextResponse.json(ticket, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/add-ticket:", error);
    // Include error message to aid debugging (remove in production)
    return NextResponse.json({ error: "Failed to create ticket", details: (error as Error).message }, { status: 500 });
  }
}



