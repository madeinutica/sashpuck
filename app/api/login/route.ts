import { NextResponse } from 'next/server';
import { serialize } from 'cookie';
import { adminUsers } from '../../../lib/adminAuth';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const userConfig = adminUsers[username];

    if (!userConfig || userConfig.passwordHash !== password) {
      return NextResponse.json({ success: false, error: 'Invalid username or password' }, { status: 401 });
    }

    const session = {
      username,
      isLoggedIn: true,
      loginTime: Date.now(),
    };

    const sessionCookie = serialize('adminSession', JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
      sameSite: 'lax',
    });

    const headers = { 'Set-Cookie': sessionCookie };

    return NextResponse.json({ success: true }, { headers });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'An internal error occurred' }, { status: 500 });
  }
}
