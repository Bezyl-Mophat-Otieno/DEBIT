import { Budget } from '@/types';

export async function getBudgets(): Promise<Budget[]> {
    const response = await fetch('/api/budgets');
    if (!response.ok) {
        throw new Error('Failed to fetch budgets');
    }
    return response.json();
}

export async function createBudget(budget: Omit<Budget, 'id' | 'userId'>): Promise<Budget> {
    const response = await fetch('/api/budgets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(budget),
    });

    if (!response.ok) {
        throw new Error('Failed to create budget');
    }

    return response.json();
}