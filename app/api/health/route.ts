import { NextResponse } from 'next/server';
import { db } from '@/lib/db';


export async function GET() {
    try {
        await db.query('SELECT 1');
        return NextResponse.json({ status: 'healthy', database: 'connected' });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { status: 'unhealthy', database: 'disconnected' },
            { status: 500 }
        );
    }
}
export async function POST(request: Request) {
    return NextResponse.json({ status: 'healthy', database: 'connected' });
}