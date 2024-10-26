import { z } from 'zod';

export const expenseSchema = z.object({
    amount: z.number().positive(),
    description: z.string().min(1),
    expenseDate: z.date(),
    budgetId: z.number().optional(),
});