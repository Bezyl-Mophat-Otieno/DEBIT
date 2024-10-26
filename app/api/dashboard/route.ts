import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = 'force-static'

export async function GET() {
    noStore();
    try {
        const summary = await db.query(
            'SELECT * FROM Dashboard_Summary WHERE user_id = $1',
            ['temp-user-id'] // Replace with actual user ID from auth
        );

        return NextResponse.json(summary[0] || {
            totalIncome: 0,
            totalExpenditure: 0,
            balance: 0,
            remainingBudget: 0,
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch dashboard summary' },
            { status: 500 }
        );
    }
}