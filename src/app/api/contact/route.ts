import { NextResponse } from "next/server";

type Enquiry = {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  country?: string;
  mw?: string;
  mwh?: string;
  phase?: string;
  message?: string;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (
    !isNonEmpty(body.name) ||
    !isNonEmpty(body.company) ||
    !isNonEmpty(body.role) ||
    !isNonEmpty(body.email) ||
    !isNonEmpty(body.country) ||
    !isNonEmpty(body.phase) ||
    !isNonEmpty(body.message)
  ) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
  }

  const id = `IX-INQ-${new Date().getUTCFullYear()}-${String(Date.now()).slice(-6)}`;
  return NextResponse.json({ ok: true, id });
}
