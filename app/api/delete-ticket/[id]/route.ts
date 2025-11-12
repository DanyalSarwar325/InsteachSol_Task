import { NextResponse } from "next/server";
import DbConnect from "@/app/lib/dbConnect";
import Ticket from "@/app/models/ticket";

export async function DELETE(
  req: Request,
  { params }: { params: any }
) {
  try {
    await DbConnect();

    // params may be a Promise in experimental runtimes — unwrap when necessary
    const resolvedParams = typeof params === "function" ? await params() : await params;
    const id = resolvedParams?.id;

    console.log("DELETE request for ticket id:", id);

    if (!id) {
      return NextResponse.json({ error: "Missing ticket id" }, { status: 400 });
    }

    // Attempt deletion
    const ticket = await Ticket.findByIdAndDelete(id);
    if (!ticket) {
      console.warn("Ticket not found for id:", id);
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }

    console.log("Deleted ticket:", ticket);
    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting ticket:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
