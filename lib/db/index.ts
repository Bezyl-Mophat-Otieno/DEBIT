import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export class DatabaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}

export async function executeQuery<T = any>(
    query: string,
    values: any[] = []
): Promise<T[]> {
    noStore();
    try {
        const result = await sql.query(query, values);
        return result.rows as T[];
    } catch (error) {
        console.error('Database query error:', error);
        throw new DatabaseError('Failed to execute database query');
    }
}

// export async function executeTransaction<T = any>(
//     queries: { query: string; values: any[] }[]
// ): Promise<T[][]> {
//     noStore();
//     try {
//         const results: T[][] = [];
//         await sql.transaction(async (client) => {
//             for (const { query, values } of queries) {
//                 const result = await client.query(query, values);
//                 results.push(result.rows as T[]);
//             }
//         });
//         return results;
//     } catch (error) {
//         console.error('Database transaction error:', error);
//         throw new DatabaseError('Failed to execute database transaction');
//     }
// }

export const db = {
    query: executeQuery,
    // transaction: executeTransaction,
};