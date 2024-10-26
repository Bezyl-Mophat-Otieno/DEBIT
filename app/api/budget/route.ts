import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/db';
import { budgetSchema } from '@/lib/validations/budget';
export async function GET() {
    try {
        const budgets = await executeQuery(`
      SELECT * FROM budgets 
      WHERE end_date >= CURRENT_DATE 
      ORDER BY start_date ASC
    `);
        return NextResponse.json(budgets);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch budgets' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const json = await request.json();
        const body = budgetSchema.parse(json);

        const result = await executeQuery(
            `INSERT INTO budgets (amount, category, period, start_date, end_date, user_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
            [body.amount, body.category, body.cadence, body.startDate, body.endDate, 'temp-user-id']
        );

        return NextResponse.json(result[0]);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create budget' }, { status: 500 });
    }
}