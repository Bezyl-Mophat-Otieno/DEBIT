import {NextRequest, NextResponse} from 'next/server';
// @ts-ignore
import { compare } from 'bcryptjs';
import { db } from '@/lib/db';
import { userSchema } from '@/lib/validations/user';

export const dynamic = 'force-static'

export async function POST(request: NextRequest) {
    try {
        const json = await request.json();
        const body = userSchema.parse(json);

        // Find user
        const users = await db.query(
            'SELECT * FROM DebitUsers WHERE email = $1',
            [body.email]
        );

        const user = users[0];

        if (!user) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Verify password
        const isValid = await compare(body.password, user.password_hash);

        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Return user without password
        const { password_hash, ...userWithoutPassword } = user;

        return NextResponse.json({ user: userWithoutPassword });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Failed to log in' },
            { status: 500 }
        );
    }
}