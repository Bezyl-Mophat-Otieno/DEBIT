import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { incomeSchema } from '@/lib/validations/income';
import { randomUUID } from "node:crypto";

export async function POST(request: Request) {
    try {
        const json = await request.json();
        const body = incomeSchema.parse({
            ...json,
            incomeDate: new Date(json.incomeDate),
        });

        const result = await db.query(
            `INSERT INTO Incomes (amount, source, income_date, user_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
            [body.amount, body.source, body.incomeDate,randomUUID()]
        );

        // Refresh the materialized view
        await db.query('REFRESH MATERIALIZED VIEW Dashboard_Summary');

        return NextResponse.json(result[0]);
    } catch (error) {
        console.error('Failed to create income:', error);
        return NextResponse.json(
            { error: 'Failed to create income' },
            { status: 500 }
        );
    }
}