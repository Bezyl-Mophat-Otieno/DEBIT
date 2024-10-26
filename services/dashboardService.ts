import { DashboardSummary } from '@/types';

export async function getDashboardSummary(): Promise<DashboardSummary> {
    const response = await fetch('/api/dashboard');
    if (!response.ok) {
        throw new Error('Failed to fetch dashboard summary');
    }
    return response.json();
}