export interface User {
    userId: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Income {
    incomeId: number;
    userId: string;
    amount: number;
    source: string;
    incomeDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface Budget {
    budgetId: number;
    userId: string;
    category: string;
    amount: number;
    cadence: 'daily' | 'weekly' | 'monthly' | 'yearly';
    startDate: Date;
    endDate: Date;
    remainingAmount: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Expense {
    expenseId: number;
    userId: string;
    budgetId?: number;
    amount: number;
    description: string;
    expenseDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface DashboardSummary {
    userId: string;
    totalIncome: number;
    totalExpenditure: number;
    balance: number;
    remainingBudget: number;
}