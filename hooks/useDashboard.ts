import { useQuery } from '@tanstack/react-query';
import { getDashboardSummary } from '@/services/dashboardService';

export function useDashboard() {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: getDashboardSummary,
    });
}