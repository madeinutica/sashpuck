import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminUsers, Session } from '../../../lib/adminAuth';

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('adminSession');

  if (!sessionCookie) {
    return NextResponse.json({ isLoggedIn: false }, { status: 200 });
  }

  try {
    const session: Session = JSON.parse(sessionCookie.value);
    const userConfig = adminUsers[session.username];

    if (session.isLoggedIn && userConfig) {
      // Return user data without sensitive info
      return NextResponse.json({
        isLoggedIn: true,
        user: {
          id: session.username,
          username: session.username,
          role: userConfig.role,
          permissions: userConfig.permissions,
        },
        session: {
          ...session,
          userId: session.username, // ensure userId is set
        }
      }, { status: 200 });
    }
  } catch (error) {
    // Invalid cookie format
  }

  return NextResponse.json({ isLoggedIn: false }, { status: 200 });
}
