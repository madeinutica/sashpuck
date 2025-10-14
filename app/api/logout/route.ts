import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  // Expire the cookie by setting maxAge to -1
  const sessionCookie = serialize('adminSession', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: -1,
    sameSite: 'lax',
  });

  const headers = { 'Set-Cookie': sessionCookie };

  return NextResponse.json({ success: true }, { headers });
}
