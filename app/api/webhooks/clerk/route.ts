import { Webhook } from 'svix'
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import {createOrUpdateUser} from "@/lib/db/webhooks";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
    }

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Webhook instance with your secret
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent;

    try {
        // Verify the webhook
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        });
    }

    // Handle the webhook
    try {
        const eventType = evt.type;

        if (eventType === 'user.created' || eventType === 'user.updated') {
            const user = await createOrUpdateUser(evt);
            return NextResponse.json({ success: true, user });
        }

        // Return a response to acknowledge receipt of the event
        return NextResponse.json({ success: true, message: `Webhook received: ${eventType}` });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return NextResponse.json(
            { success: false, error: 'Error processing webhook' },
            { status: 500 }
        );
    }
}