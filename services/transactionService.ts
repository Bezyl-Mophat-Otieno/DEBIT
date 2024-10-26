import { Transaction } from '@/types';

export async function getTransactions(): Promise<Transaction[]> {
    const response = await fetch('/api/transactions');
    if (!response.ok) {
        throw new Error('Failed to fetch transactions');
    }
    return response.json();
}

export async function createTransaction(transaction: Omit<Transaction, 'id' | 'userId'>): Promise<Transaction> {
    const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    });

    if (!response.ok) {
        throw new Error('Failed to create transaction');
    }

    return response.json();
}