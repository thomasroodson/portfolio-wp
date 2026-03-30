import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type Payload = {
  slug?: string;
};

export async function POST(req: NextRequest) {
  const expected = process.env.REVALIDATE_SECRET;
  const provided = req.headers.get("x-revalidate-secret");

  if (!expected || !provided || provided !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const payload: Payload = await req
    .json()
    .then((v) => v as Payload)
    .catch(() => ({} as Payload));

  const slug = typeof payload.slug === "string" ? payload.slug : undefined;

  const paths = ["/", "/projects"];
  if (slug) paths.push(`/projects/${slug}`);

  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({ ok: true, revalidated: paths });
}

