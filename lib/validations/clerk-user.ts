import { z } from 'zod' 

export const ClerkUserSchema = z.object({
    id: z.string(),
    email_address: z.string().email(),
    created_at: z.string(),
    updated_at: z.string(),
})