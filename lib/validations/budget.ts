import { z } from 'zod';

export const budgetSchema = z.object({
    category: z.string().min(1),
    amount: z.number().positive(),
    cadence: z.enum(['daily', 'weekly', 'monthly', 'yearly']),
    startDate: z.date(),
    endDate: z.date(),
});