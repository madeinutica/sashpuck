import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function POST(request: Request) {
  const payload = await request.json();

  const { error } = await supabase
    .from("pages")
    .upsert({ path: payload.path, data: payload.data });

  if (error) {
    console.error(error);
    return NextResponse.json({ status: "error", message: error.message });
  }

  // Purge Next.js cache
  revalidatePath(payload.path);

  return NextResponse.json({ status: "ok" });
}
