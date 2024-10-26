import { z } from 'zod';

export const budgetSchema = z.object({
    amount: z.number().positive(),
    category: z.string().min(1),
    period: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY']),
    startDate: z.date(),
    endDate: z.date(),
});