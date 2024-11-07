import { NextResponse } from 'next/server'
// @ts-ignore
import { hash } from 'bcryptjs';
import { db } from '@/lib/db';
import { userSchema } from '@/lib/validations/user';

export const dynamic = 'force-static'

export async function POST(request: Request) {
    try {
        const json = await request.json();
        const body = userSchema.parse(json);

        // Check if user already exists
        const existingUser = await db.query(
            'SELECT * FROM DebitUsers WHERE email = $1',
            [body.email]
        );

        if (existingUser.length > 0) {
            return NextResponse.json(
                { error: 'User already exists' },
                { status: 400 }
            );
        }

        // Hash password
        const hashedPassword = await hash(body.password, 12);

        // Create user
        const result = await db.query(
            `INSERT INTO DebitUsers (email, password_hash)
       VALUES ($1, $2)
       RETURNING user_id, email`,
            [body.email, hashedPassword]
        );

        const user = result[0];

        return NextResponse.json({ user });
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json(
            { error: 'Failed to create account' },
            { status: 500 }
        );
    }
}