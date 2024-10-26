import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/db';
import { transactionSchema } from '@/lib/validations/transaction';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET() {
    noStore();
    try {
        const transactions = await executeQuery(`
      SELECT * FROM transactions 
      ORDER BY date DESC 
      LIMIT 50
    `);
        return NextResponse.json(transactions);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const json = await request.json();
        const body = transactionSchema.parse(json);

        const result = await executeQuery(
            `INSERT INTO transactions (amount, type, category, description, date, user_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
            [body.amount, body.type, body.category, body.description, body.date, 'temp-user-id']
        );

        return NextResponse.json(result[0]);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create transaction' }, { status: 500 });
    }
}