export interface Transaction {
    id: string;
    amount: number;
    type: 'INCOME' | 'EXPENSE';
    category: string;
    description: string;
    date: Date;
    userId: string;
}

export interface Budget {
    id: string;
    amount: number;
    category: string;
    period: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    startDate: Date;
    endDate: Date;
    userId: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
}