import { z } from 'zod';

export const incomeSchema = z.object({
    amount: z.number().positive(),
    source: z.string().min(1),
    incomeDate: z.date(),
});