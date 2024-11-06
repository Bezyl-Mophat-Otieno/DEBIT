import { headers } from 'next/headers';
import {UserWebhookEvent, WebhookEvent} from '@clerk/nextjs/server';
import { db } from './index'

export async function createOrUpdateUser(event: UserWebhookEvent) {
    // @ts-ignore
    const { id, primary_email_address_id, created_at, updated_at } = event.data;


    if (!primary_email_address_id) {
        throw new Error('User must have a primary email address');
    }

    try {
        const result = await db.query(
            `INSERT INTO DebitUsers (user_id, email, created_at, updated_at)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (user_id) DO UPDATE
       SET email = $2,
           updated_at = $4
       RETURNING *`,
            [
                id,
                primary_email_address_id,
                new Date(created_at),
                new Date(updated_at)
            ]
        );

        return result[0];
    } catch (error) {
        console.error('Error syncing user to database:', error);
        throw error;
    }
}