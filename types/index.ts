import dayjs from "dayjs";

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

export interface AddIncomeFormData {
    amount: number;
    source: string;
    incomeDate: dayjs.Dayjs;
}

export interface SignupFormData {
    email: string;
    password: string;
    confirmPassword: string;
}


export interface LoginFormData {
    email: string;
    password: string;
}

export interface ClerkSignUpData {
    id: string;
    email_address: string;
    created_at: string;
    updated_at: string;
}