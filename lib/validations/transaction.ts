import { z } from 'zod';

export const transactionSchema = z.object({
    amount: z.number().positive(),
    type: z.enum(['INCOME', 'EXPENSE']),
    category: z.string().min(1),
    description: z.string().min(1),
    date: z.date(),
});